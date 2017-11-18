import { any } from 'codelyzer/util/function';
import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { UI } from 'app/pdf-form-editor/model/UI';

@Component({
  selector: 'form-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {

  @Input() name: string;
  @Input() value: string;

  @Output() doneEditing = new EventEmitter<UI.EditValue>();

  @ViewChild('inputHtml') childEditField: ElementRef;

  keyPressHandler(keyCode: KeyboardEvent) {
    console.log('KEY Code:' + keyCode);
    if (keyCode.keyCode === 13 ||
      keyCode.keyCode === 9 ||
      (keyCode.which == 9 && keyCode.shiftKey)) {
      // Enter key presed - done editing
      const editValue = new UI.EditValue();
      editValue.value = this.value;
      editValue.keyCode = keyCode.keyCode;
      keyCode.preventDefault();
      if (keyCode.which === 9 && keyCode.shiftKey) {
        // Shift Tab key
        editValue.keyCode = 109;
      }
      this.doneEditing.emit(editValue);
    }
  }

  leavingField() {
    console.log('Test blur function called');
    const editValue = new UI.EditValue();
    editValue.value = this.value;
    this.doneEditing.emit(editValue);
  }

  public ngAfterViewInit(): void {
    console.log('Text after view init');
    this.childEditField.nativeElement.focus();
  }
}
