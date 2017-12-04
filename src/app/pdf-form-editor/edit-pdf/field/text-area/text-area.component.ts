import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { UI } from './../../../model/UI';
import { Base } from './../../../model/Base';

@Component({
  selector: 'edit-text-area',
  templateUrl: './text-area.component.html',
})
export class EditTextAreaComponent {

  @Input() name: string;
  @Input() value: string;
  @Input() width: number;
  @Input() height: number;
  @Input() title: string;

  @Output() leaveEdit = new EventEmitter<UI.FieldEdited>();
  @ViewChild('inputHtml') childEditField: ElementRef;

  onFocusValue: string;

  constructor() { }

  focus() {
    // Have to wait 200ms to allow angular construct to finish before
    // the focus will activate.
    setTimeout(() => {
      this.childEditField.nativeElement.focus();
    }, 200);

    this.onFocusValue = this.value;
  }

  blurredHandler() {
    if (this.onFocusValue !== this.value) {
      const changed: UI.FieldEdited = {
        name: this.name,
        value: this.value
      };

      this.leaveEdit.emit(changed);
    }
  }
}
