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
  valueChanged = false;
  // value updated by text edit.
  editValue: string;
  rememberedValue: string;

  tabIndex = 0;

  private left = 0;
  private top = 0;
  private width = 0;
  private height = 0;

  locked = true;

  locationStyle: {};

  editingStyle: {};

  constructor(element: ElementRef, private moveService: FieldChangeService) {
  }

  setScale(scale: UI.Scale) {
    this.left = Math.round(this.editField.location.left * scale.horiz * 10) / 10;
    this.top = Math.round(this.editField.location.top * scale.vertical * 10) / 10;
    this.width = Math.round(this.editField.location.width * scale.horiz * 10) / 10;
    this.height = Math.round(this.editField.location.height * scale.vertical * 10) / 10;

    this.setStyle();

  }

  private setStyle() {
    switch (this.editField.state) {
      case Edit.DisplayState.NoValue:
        this.locationStyle = {
          'position': 'absolute',
          'left': this.left + 'px',
          'top': this.top + 'px',
          'width': this.width + 'px',
          'height': this.height + 'px',
          'background-color': 'lightyellow'
          //      'border': '1px solid green'
        };
        break;

      case Edit.DisplayState.EditedValue:
        this.locationStyle = {
          'position': 'absolute',
          'left': this.left + 'px',
          'top': this.top + 'px',
          'width': this.width + 'px',
          'height': this.height + 'px',
          'background-color': 'white',
          'border': '1px solid #ddd'
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
            'left': this.left + 'px',
            'top': this.top + 'px',
            'width': this.width + 'px',
            'height': this.height + 'px',
            'background-color': 'lightgreen',
            'border': '1px solid #ddd'
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

  getPattern() {
    // TODO: Not working yet.
    switch (this.editField.format) {
      case Base.Format.Date:
        return '^(0?[1-9]|[12][0-9]|3[01])[\\/\\-](0?[1-9]|1[012])[\\/\\-]\d{4}$';
      case Base.Format.Dollar:
        return '\\d+(\\.\\d{2})?';
      case Base.Format.Integer:
        return '[-+]?[0-9]*';
      case Base.Format.Percent:
        return '[-+]?[0-9]*[.]?[0-9]+';
      case Base.Format.PhoneNumber:
        return '\\d{3}[\-]\\d{3}[\-]\\d{4}';
      case Base.Format.SocialSecurityNumber:
        return '(^\\d{3}-?\\d{2}-?\\d{4}$|^XXX-XX-XXXX$)';
      case Base.Format.State:
        // list would probably faster and better but ...
        return '(AL|AK|AR|AZ|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|‌​MA|MD|ME|MI|MN|MO|MS‌​|MT|NC|ND|NE|NH|NJ|N‌​M|NV|NY|OH|OK|OR|PA|‌​RI|SC|SD|TN|TX|UT|VA‌​|VT|WA|WI|WV|WY)';
      // case Base.Format.ZipCode:
      //   return'(\\d{5}([\\-]\\d{4})?)'
    }
  }


  public ngAfterContentInit(): void {
    this.editValue = this.editField.value;
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
}
