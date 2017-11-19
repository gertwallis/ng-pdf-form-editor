import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { UI } from 'app/pdf-form-editor/model/UI';

@Component({
  selector: 'edit-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class EditTextComponent implements AfterViewInit {

  @Input() name: string;
  @Input() value: string;

  @Output() doneEditing = new EventEmitter<UI.EditEvent>();

  @ViewChild('inputHtml') childEditField: ElementRef;

  keyPressHandler(keyCode: KeyboardEvent) {
    console.log('KEY Code:' + keyCode);
    if (keyCode.keyCode === 13 ||
      keyCode.keyCode === 9 ||
      (keyCode.which === 9 && keyCode.shiftKey)) {
      // Enter key presed - done editing
      const editEvent = new UI.EditEvent();
      editEvent.type = UI.EventType.Exit;
      editEvent.name = this.name;
      editEvent.value = this.value;
      editEvent.keyCode = keyCode.keyCode;
      keyCode.preventDefault();
      if (keyCode.which === 9 && keyCode.shiftKey) {
        // Shift Tab key
        editEvent.keyCode = 109;
      }
      this.doneEditing.emit(editEvent);
    }
  }

  leavingField() {
    console.log('Test blur function called');
    const editEvent = new UI.EditEvent();
    editEvent.value = this.value;
    editEvent.name = this.name;
    this.doneEditing.emit(editEvent);
  }

  public ngAfterViewInit(): void {
    console.log('Text after view init');
    this.childEditField.nativeElement.focus();
  }
}
