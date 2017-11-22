import { Component, Input, OnInit, ViewChild, Output, EventEmitter, ElementRef, AfterContentInit } from '@angular/core';

// Service
import { FieldChangeService } from '../../service/field-changed.service';

import { EditTextComponent } from './text/text.component';
import { EditTextAreaComponent } from './text-area/text-area.component';
import { EditXBoxComponent } from './xbox/xbox.component';


// Models
import { Base } from './../../model/Base';
import { Edit } from './../../model/Edit';
import { UI } from './../..//model/UI';

@Component({
  selector: 'edit-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class EditFieldComponent implements AfterContentInit {

  @Input() active = false;
  @Input() editField: Edit.Field;

  @ViewChild(EditTextComponent) editTextView: EditTextComponent;
  @ViewChild(EditTextAreaComponent) editTextAreaView: EditTextAreaComponent;
  @ViewChild(EditXBoxComponent) editXBoxView: EditXBoxComponent;

  color: string;

  tabIndex = 0;

  private style: UI.FieldStyle;

  locked = true;

  locationStyle: {};

  constructor(element: ElementRef, private moveService: FieldChangeService) {
    this.style = new UI.FieldStyle();
  }

  setScale(scale: UI.Scale) {
    this.style.left = Math.round(this.editField.location.left * scale.horiz * 10) / 10;
    this.style.top = Math.round(this.editField.location.top * scale.vertical * 10) / 10;
    this.style.width = Math.round(this.editField.location.width * scale.horiz * 10) / 10;
    this.style.height = Math.round(this.editField.location.height * scale.vertical * 10) / 10;

    this.setStyle();

  }

  private setStyle() {

    // TODO: Need to move all this mess to a directive
    let backgroundColor: string;

    switch (this.style.state) {
      case UI.DisplayState.Changed:
        backgroundColor = 'lightgreen';
        break;
      case UI.DisplayState.Saved:
        backgroundColor = 'white';
        break;
      case UI.DisplayState.NoValue:
        backgroundColor = 'lightyellow';
        break;
      case UI.DisplayState.Invalid:
        backgroundColor = 'lightpink';
        break;
      case UI.DisplayState.Locked:
        this.locationStyle = {
          'display': 'none'
        };
        return;
    }

    this.locationStyle = {
      'position': 'absolute',
      'left': this.style.left + 'px',
      'top': this.style.top + 'px',
      'width': this.style.width + 'px',
      'height': this.style.height + 'px',
      'background-color': backgroundColor
      // 'z-index': '99'
      //      'border': '1px solid green'
    };
  }

  activate() {
    // console.log('FIELD: Ativate ' + this.tabIndex + ' ' + this.editField.name);
    this.active = true;
    switch (this.editField.format) {
      case Base.Format.XBox:
        this.editXBoxView.focus();
        break;
      case Base.Format.TextArea:
        this.editTextAreaView.focus();
        break;
      default:
        this.editTextView.focus();
        break;
    }
  }

  deActivate() {
    // console.log('FIELD: De-ativate ' + this.tabIndex + ' ' + this.editField.name);
    this.active = false;
  }

  clicked() {
    if (this.editField.format === Base.Format.XBox) {
      this.editXBoxView.toggleValue();
      const changed: UI.FieldChanged = {
        updatedValue: this.editXBoxView.value,
        valid: true
      };
      this.handleChange(changed);
    }

    this.moveField(UI.Direction.Current);
  }

  public ngAfterContentInit(): void {
    this.tabIndex = this.editField.location.tabOrder;

    if (this.editField.value) {
      this.style.state = UI.DisplayState.Saved;
    } else {
      this.style.state = UI.DisplayState.NoValue;
    }
  }

  keyPressHandler(keyCode: KeyboardEvent) {
    if (keyCode.keyCode === 13 ||
      keyCode.keyCode === 9 ||
      (keyCode.which === 9 && keyCode.shiftKey)) {
      keyCode.preventDefault();
      keyCode.stopPropagation();
      if (keyCode.which === 9 && keyCode.shiftKey) {
        this.moveField(UI.Direction.BackWard);
      } else {
        this.moveField(UI.Direction.Forward);
      }
    }
  }

  moveField(direction: UI.Direction) {
    const field: UI.LeaveField = {
      direction: direction,
      name: this.editField.name,
      tabIndex: this.tabIndex
    };

    this.moveService.exitField(field);
  }

  handleChange(updateEvent: UI.FieldChanged) {
    if (updateEvent.updatedValue != undefined) {
      this.style.state = UI.DisplayState.Changed;
      this.editField.value = updateEvent.updatedValue;
    }

    if (updateEvent.valid) {
      this.style.valid = updateEvent.valid;
    } else {
      this.style.state = UI.DisplayState.Invalid;
    }

    this.setStyle();

    // console.log('Updated: ' + this.editField.name + ' (' + updateEvent.valid + ') ' + updateEvent.updatedValue);
  }
}
