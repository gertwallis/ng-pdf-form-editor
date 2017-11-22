import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { AfterContentInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

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
  @Input() pattern: string;

  validateRegEx: RegExp;
  valid: boolean;

  @ViewChild('inputHtml') childEditField: ElementRef;


  constructor() { }


  focus() {
    // Have to wait 200ms to allow angular construct to finish before
    // the focus will activate.
    setTimeout(() => {
      this.childEditField.nativeElement.focus();
    }, 200);
  }

  validate(): boolean {
    if (this.validateRegEx) {
      return this.validateRegEx.test(this.value);
    }

    return true;
  }

  public ngAfterContentInit(): void {
    if (this.pattern) {
      this.validateRegEx = new RegExp(this.pattern);
    }
  }

  keyPressHandler(keyCode: KeyboardEvent) {
    this.valid = this.validate();
    console.log(this.valid + ': /' + this.pattern + '/.test(' + this.value);
  }    
}

// Custom Controls
// https://blog.thoughtram.io/angular/2016/07/27/custom-form-controls-in-angular-2.html
// Validators
// https://codecraft.tv/courses/angular/advanced-topics/configurable-custom-validators/
// Tooltip
// https://webdesign.tutsplus.com/tutorials/css-tooltip-magic--cms-28082
// https://github.com/ng2-ui/tooltip
