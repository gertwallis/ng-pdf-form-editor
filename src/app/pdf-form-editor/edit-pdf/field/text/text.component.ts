import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { AfterContentInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

import { UI } from 'app/pdf-form-editor/model/UI';

import { DocumentBase } from './../../../model/DocumentBase';

@Component({
  selector: 'edit-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class EditTextComponent implements AfterContentInit{

  @Input() name: string;
  @Input() value: string;
  @Input() tabIndex: number;
  @Input() format: DocumentBase.Format;

  @ViewChild('inputHtml') childEditField: ElementRef;

  pattern: string;

  constructor() { }


  focus() {
    // Have to wait 200ms to allow angular construct to finish before
    // the focus will activate.
    setTimeout(() => {
      this.childEditField.nativeElement.focus();
    }, 200);
  }

  getPattern() {

    // TODO: Not working yet.
    switch (this.format) {
      case DocumentBase.Format.Date:
        return '^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$';
      case DocumentBase.Format.Dollar:
        break;
      case DocumentBase.Format.Integer:
        break;
      case DocumentBase.Format.Percent:
        break;
      case DocumentBase.Format.PhoneNumber:
        break;
      case DocumentBase.Format.SocialSecurityNumber:
        break;
      case DocumentBase.Format.SocialSecurityNumber:
        break;
    }
  }


    public ngAfterContentInit(): void {
      this.pattern = this.getPattern();
    }
}

// Custom Controls
// https://blog.thoughtram.io/angular/2016/07/27/custom-form-controls-in-angular-2.html
// Validators
// https://codecraft.tv/courses/angular/advanced-topics/configurable-custom-validators/
// Tooltip
// https://webdesign.tutsplus.com/tutorials/css-tooltip-magic--cms-28082
// https://github.com/ng2-ui/tooltip
