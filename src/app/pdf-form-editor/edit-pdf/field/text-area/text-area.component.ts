import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { UI } from 'app/pdf-form-editor/model/UI';

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

  @Output() dataChanged = new EventEmitter<UI.FieldChanged>();

  @ViewChild('inputHtml') childEditField: ElementRef;

  initialValue: string;

  constructor() { }

  focus() {
    // Have to wait 200ms to allow angular construct to finish before
    // the focus will activate.
    setTimeout(() => {
      this.childEditField.nativeElement.focus();
    }, 200);

    this.initialValue = this.value;
  }

  blurredHandler() {
    if (this.initialValue !== this.value) {
      const changed: UI.FieldChanged = {
        updatedValue: this.value,
        valid: undefined
      };

      this.dataChanged.emit(changed);
    }
  }
}
