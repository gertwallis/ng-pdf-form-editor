import { AfterContentInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { UI } from 'app/pdf-form-editor/model/UI';

import { Base } from './../../../model/Base';

@Component({
  selector: 'edit-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class EditTextComponent implements AfterContentInit {

  @Input() name: string;
  @Input() value: string;
  @Input() title: string;
  @Input() tabIndex: number;
  @Input() format: number;

  @Output() dataChanged = new EventEmitter<UI.FieldChanged>();

  initialValue: string;
  initialValidation: boolean;
  currentValidation: boolean;
  maxLength: number;

  validateRegEx: RegExp;

  @ViewChild('inputHtml') childEditField: ElementRef;

  constructor() { }

  focus() {
    // Have to wait 200ms to allow angular construct to finish before
    // the focus will activate.
    setTimeout(() => {
      this.childEditField.nativeElement.focus();
    }, 200);

    // Keep track of changes to the value during this editing session.
    this.initialValidation = this.validate();
    this.initialValue = this.value;
  }

  validate(): boolean {
    if (this.validateRegEx) {
      return this.validateRegEx.test(this.value);
    }

    return true;
  }

  getPattern() {
    // TODO: Not working yet.
    switch (this.format) {
      case Base.Format.Date:
        return '^(0?[1-9]|[12][0-9]|3[01])[\\/\\-](0?[1-9]|1[012])[\\/\\-]\d{4}$';
      case Base.Format.Dollar:
        return '^\\d+(\\.\\d{2})?$';
      case Base.Format.Integer:
        return '^[-+]?[0-9]*$';
      case Base.Format.Percent:
        return '^[-+]?[0-9]*[.]?[0-9]+$';
      case Base.Format.PhoneNumber:
        return '^\\d{3}[\-]\\d{3}[\-]\\d{4}$';
      case Base.Format.SocialSecurityNumber:
        return '^\\d{3}-?\\d{2}-?\\d{4}$|^XXX-XX-XXXX$';
      case Base.Format.State:
        // list would probably faster and better but ...
        return '(AL|AK|AR|AZ|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|‌​MA|MD|ME|MI|MN|MO|MS‌​|MT|NC|ND|NE|NH|NJ|N‌​M|NV|NY|OH|OK|OR|PA|‌​RI|SC|SD|TN|TX|UT|VA‌​|VT|WA|WI|WV|WY)';
      // case Base.Format.ZipCode:
      //   return'(\\d{5}([\\-]\\d{4})?)'
    }

    return undefined;
  }


  blurredHandler() {
      console.log('BLURRED:' + this.name + ': ' +  this.value + ' : ' + this.currentValidation);

    // Notify if the value has chaned during this session.
    if (this.initialValue !== this.value || this.initialValidation !== this.currentValidation) {

      const changed = new  UI.FieldChanged();

      if (this.initialValidation !== this.currentValidation) {
        changed.valid = this.currentValidation;
      }

      if (this.initialValue !== this.value) {
         changed.updatedValue = this.value;
      }

      this.dataChanged.emit(changed);
    }
  }

  public ngAfterContentInit(): void {
    const pattern = this.getPattern();
    if (this.format) {
      this.validateRegEx = new RegExp(pattern);
    }

    // console.log('START:' + this.name + ': ' + this.format + ' : ' + this.getPattern() + ': ' + this.initialValidation);
  }
}

// Custom Controls
// https://blog.thoughtram.io/angular/2016/07/27/custom-form-controls-in-angular-2.html
// Validators
// https://codecraft.tv/courses/angular/advanced-topics/configurable-custom-validators/
// Tooltip
// https://webdesign.tutsplus.com/tutorials/css-tooltip-magic--cms-28082
// https://github.com/ng2-ui/tooltip
