import { AfterContentInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { UI } from 'app/pdf-form-editor/model/UI';

import { Base } from './../../../model/Base';

@Component({
  selector: 'edit-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class EditTextComponent {

  @Input() name: string;
  @Input() value: string;
  @Input() title: string;
  @Input() width: number;
  @Input() height: number;
  @Input() format: number;

  @Output() leaveEdit = new EventEmitter<UI.FieldEdited>();

  maxLength: number;

  @ViewChild('inputHtml') childEditField: ElementRef;

  constructor() { }

  focus() {
    // Have to wait 200ms to allow angular construct to finish before
    // the focus will activate.
    setTimeout(() => {
      this.childEditField.nativeElement.focus();
    }, 200);
  }


  blurredHandler() {
    // console.log('BLURRED:' + this.name + ': ' + this.value + ' : ' + validation);

    // Notify if the value has chaned during this session.
    const changed: UI.FieldEdited = {
      value: this.value
    };

    this.leaveEdit.emit(changed);
  }
}

// Custom Controls
// https://blog.thoughtram.io/angular/2016/07/27/custom-form-controls-in-angular-2.html
// Validators
// https://codecraft.tv/courses/angular/advanced-topics/configurable-custom-validators/
// Tooltip
// https://webdesign.tutsplus.com/tutorials/css-tooltip-magic--cms-28082
// https://github.com/ng2-ui/tooltip
