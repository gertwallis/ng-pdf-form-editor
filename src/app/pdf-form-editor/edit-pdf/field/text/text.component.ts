import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'form-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {

   @Input() name: string;
   @Input() value: string;

  @Output() doneEditing = new EventEmitter<string>();

  keyPressHandler(keyCode: KeyboardEvent) {
    console.log('KEY Code:' +  keyCode);
    if (keyCode.charCode === 13) {
      // Enter key presed - done editing
      this.doneEditing.emit(this.value);
    }
  }

  leavingField() {
    console.log('Test blur function called');
    this.doneEditing.emit(this.value);
  }
}
