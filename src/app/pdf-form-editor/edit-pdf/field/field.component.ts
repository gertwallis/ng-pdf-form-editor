import { Component, Input, OnInit, ViewChild, Output, EventEmitter, ElementRef, AfterContentInit } from '@angular/core';

// Service
import { FieldChangeService } from '../../service/field-changed.service';

import { EditTextComponent } from './text/text.component';
import { EditTextAreaComponent } from './text-area/text-area.component';
import { EditXBoxComponent } from './xbox/xbox.component';


// Models
import { Base } from './../../model/Base';
import { Edit } from './../../model/Edit';
import { UI } from 'app/pdf-form-editor/model/UI';

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
  // private left = 0;
  // private top = 0;
  // private width = 0;
  // private height = 0;

  locked = true;

  locationStyle: {};

  editingStyle: {};

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
    switch (this.editField.state) {
      case Edit.DisplayState.NoValue:
        this.locationStyle = {
          'position': 'absolute',
          'left': this.style.left + 'px',
          'top': this.style.top + 'px',
          'width': this.style.width + 'px',
          'height': this.style.height + 'px',
          'background-color': 'lightyellow',
          // 'z-index': '99'
          //      'border': '1px solid green'
        };
        break;

      case Edit.DisplayState.EditedValue:
        this.locationStyle = {
          'position': 'absolute',
          'left': this.style.left + 'px',
          'top': this.style.top + 'px',
          'width': this.style.width + 'px',
          'height': this.style.height + 'px',
          'background-color': 'white',
          'border': '1px solid #ddd',
          // 'z-index': '99'
          //      'border': '1px solid green'
        };
        break;

      case Edit.DisplayState.SavedValue:
        if (this.locked) {
          this.locationStyle = {
            'display': 'none'
            //      'border': '1px solid green'
          }
        }
        else {
          this.locationStyle = {
            'position': 'absolute',
            'left': this.style.left + 'px',
            'top': this.style.top + 'px',
            'width': this.style.width + 'px',
            'height': this.style.height + 'px',
            'background-color': 'lightgreen',
            'border': '1px solid #ddd',
            // 'z-index': '99'
            //      'border': '1px solid green'
          }

        }
        break;
    }
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
    // console.log('FIELD: MoveTo ' + this.tabIndex + ' ' + this.editField.name);
    if (this.editField.format === Base.Format.XBox) {
      this.editXBoxView.toggleValue();
    }

    this.moveField(UI.Direction.Current);
  }

  public ngAfterContentInit(): void {
 //   this.editValue = this.editField.value;
    this.tabIndex = this.editField.location.tabOrder;
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
    console.log('Updated: ' + this.editField.name + ' (' + updateEvent.valid +') ' + updateEvent.updatedValue);
  }
}
