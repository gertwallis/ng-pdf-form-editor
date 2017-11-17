import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {

   @Input() name: string;
   @Input() value: string;

  @Output() doneEditing = new EventEmitter<string>();

  leavingField() {
    console.log('Test blur function called');
    this.doneEditing.emit(this.value);
  }
}
