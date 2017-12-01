import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { UI } from './../../../model/UI';
import { Base } from './../../../model/Base';

@Component({
  selector: 'edit-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class EditTextAreaComponent {

  @Input() name: string;
  @Input() value: string;
  @Input() width: number;
  @Input() height: number;
  @Input() title: string;

  @Output() leaveEdit = new EventEmitter<UI.FieldEdited>();

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
    const changed: UI.FieldEdited = {
      value: this.value,
    };

    this.leaveEdit.emit(changed);
  }
}
