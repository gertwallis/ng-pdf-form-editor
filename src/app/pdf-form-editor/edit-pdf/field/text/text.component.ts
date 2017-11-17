import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {

   @Input() name: string;
   @Input() value: string;

  @Output() doneEditing = new EventEmitter<string>();

  keyPressHandler(keyCode){
    console.log('KEY Code:' +  keyCode);
  }
  leavingField() {
    console.log('Test blur function called');
    this.doneEditing.emit(this.value);
  }
}
