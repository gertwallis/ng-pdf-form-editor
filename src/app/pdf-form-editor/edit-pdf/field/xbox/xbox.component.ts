import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { AfterContentInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { UI } from 'app/pdf-form-editor/model/UI';

import { Base } from './../../../model/Base';

@Component({
  selector: 'edit-xbox',
  templateUrl: './xbox.component.html',
  styleUrls: ['./xbox.component.css']
})
export class EditXBoxComponent implements AfterContentInit {

  @Input() name: string;
  @Input() value: string;
  @Input() title: string;
  @Input() width: number;
  @Input() height: number;
  @Input() tabIndex: number;

  @Output() dataChanged = new EventEmitter<UI.FieldChanged>();

  valid: boolean;
  initialValue: string;

  @ViewChild('inputHtml') childEditField: ElementRef;

  constructor() { }

  toggleValue() {
    if (this.value === 'X') {
      this.value = '';
    } else {
      this.value = 'X';
    }
  }

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

  keyPressHandler(keyCode: KeyboardEvent) {
    if (keyCode.keyCode === 32 || keyCode.keyCode === 88) {
      this.toggleValue();
      // Spacebar is also a scroll action
      keyCode.preventDefault();
    }
  }
  public ngAfterContentInit(): void {
    if (this.value === 'x') {
      this.value = 'X';
    }

    if (this.value === 'X') {
      this.valid = true;
    } else {
      this.valid = false;
    }
  }
}
