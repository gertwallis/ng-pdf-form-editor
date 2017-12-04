import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import {
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

// Service
import { UpdateService } from '../../service/update.service';

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
})
export class EditFieldComponent implements AfterContentInit {

  @Input() active = false;
  @Input() model: Edit.Field;

  @ViewChild(EditTextComponent) editTextView: EditTextComponent;
  @ViewChild(EditTextAreaComponent) editTextAreaView: EditTextAreaComponent;
  @ViewChild(EditXBoxComponent) editXBoxView: EditXBoxComponent;

  color: string;
  tabIndex = 0;
  private style: UI.FieldStyle;
  locked = true;
  initialValue: string;
  locationStyle: {};
  validateRegEx: RegExp;


  constructor(element: ElementRef, private updateService: UpdateService) {
    this.style = new UI.FieldStyle();
  }

  setScale(scale: UI.Scale) {
    this.style.left = Math.round(this.model.location.left * scale.horiz * 10) / 10;
    this.style.top = Math.round(this.model.location.top * scale.vertical * 10) / 10;
    this.style.width = Math.round(this.model.location.width * scale.horiz * 10) / 10;
    this.style.height = Math.round(this.model.location.height * scale.vertical * 10) / 10;

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
    // console.log('FIELD: Ativate ' + this.tabIndex + ' ' + this.model.name);
    if (!this.active) {
      this.active = true;
      switch (this.model.format) {
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
  }

  deActivate() {
    // console.log('FIELD: De-ativate ' + this.tabIndex + ' ' + this.model.name);
    this.active = false;
  }

  validate(): boolean {
    if (!this.model.value) {
      return !this.model.required;
    } else {
      if (!this.validateRegEx) {
        const pattern = this.getPattern(this.model.format);
        if (pattern) {
          this.validateRegEx = new RegExp(pattern);
        }
      }

      if (this.validateRegEx) {
        return this.validateRegEx.test(this.model.value);
      } else {
        // Don't have a valid regular expression for this field ??
        // Should try to have regexes for all field types  - maybe not for alphanumeric,
        // but want to trap invalid ones for the time being. 
        console.log('Don\'t have valid regular expression pattern for field: ' + this.model.format);
        return true;
      }
    }
  }

  getPattern(format) {
    // TODO: Not working yet.
    switch (format) {
      case Base.Format.AlphaNumeric:
        return '.*';
      case Base.Format.Date:
        return '^(0?[1-9]|[12][0-9]|3[01])[\\/\\-](0?[1-9]|1[012])[\\/\\-]\\d{4}$';
      case Base.Format.Dollar:
        return '^\\d+(\\.\\d{2})?$';
      case Base.Format.Number:
      case Base.Format.Integer:
        return '^[-+]?[0-9]*$';
      case Base.Format.Percent:
        return '^[-+]?[0-9]*[.]?[0-9]+$';
      case Base.Format.PhoneNumber:
        return '^(\\([0-9]{3}\\)( |-)?|[0-9]{3}-)[0-9]{3}-[0-9]{4}$';
      case Base.Format.SocialSecurityNumber:
        return '^\\d{3}-?\\d{2}-?\\d{4}$|^XXX-XX-XXXX$';
      case Base.Format.State:
        // list would probably faster and better but ...
        return '(AL|AK|AR|AZ|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|‌​MA|MD|ME|MI|MN|MO|MS‌​|MT|NC|ND|NE|NH|NJ|N‌​M|NV|NY|OH|OK|OR|PA|‌​RI|SC|SD|TN|TX|UT|VA‌​|VT|WA|WI|WV|WY)';
      case Base.Format.XBox:
        // empty string or capital X
        return '^$|(X){1}?';
      // case Base.Format.ZipCode:
      //   return'(\\d{5}([\\-]\\d{4})?)'
    }

    return undefined;
  }

  clicked() {
    if (this.model.format === Base.Format.XBox) {
      this.editXBoxView.toggleValue();
      const changed: UI.FieldEdited = {
        name: this.model.name,
        value: this.editXBoxView.value
      };
      this.handleChange(changed);
    }

    this.moveField(UI.Direction.Current);
  }

  public ngAfterContentInit(): void {
    this.tabIndex = this.model.location.tabOrder;

    if (this.model.value) {
      this.style.state = UI.DisplayState.Saved;
    } else {
      this.style.state = UI.DisplayState.NoValue;
    }

    this.initialValue = this.model.value;

    if (!this.validate()) {
      this.style.state = UI.DisplayState.Invalid;
    };
  }

  keyPressHandler(keyCode: KeyboardEvent) {
    // Move to the next field if it is enter or tab
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
      name: this.model.name,
      tabIndex: this.tabIndex
    };

    this.updateService.exitField(field);
  }

  handleChange(updateEvent: UI.FieldEdited) {

    if (updateEvent.value !== this.initialValue) {
      this.style.state = UI.DisplayState.Changed;
      this.model.value = updateEvent.value;
    }

    this.style.valid = this.validate();
    if (!this.style.valid) {
      this.style.state = UI.DisplayState.Invalid;
    }

    this.setStyle();

    // Notify the service that field has changed
    this.updateService.editedField(updateEvent);

    // console.log('Updated: ' + this.model.name + ' (' + updateEvent.valid + ') ' + updateEvent.value);
  }
}
