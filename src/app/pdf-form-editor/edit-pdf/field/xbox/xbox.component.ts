import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { AfterContentInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

// Models
import { UI } from './../../..//model/UI';
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

  @Output() leaveEdit = new EventEmitter<UI.FieldEdited>();

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
  }

  blurredHandler() {
    const changed: UI.FieldEdited = {
      value: this.value,
    };

    this.leaveEdit.emit(changed);
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
  }
}
