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

  leavingField(currentValue) {
    // console.log("Test blur function called" + currentValue);
    this.doneEditing.emit(currentValue);
  }
}
