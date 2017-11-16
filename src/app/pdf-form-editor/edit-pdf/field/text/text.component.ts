import { AfterContentInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Model } from './../../../model/PdfForm';

@Component({
  selector: 'text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() data: Model.FieldData;
  @Input() location: Model.Location;

  @Output() doneEditing = new EventEmitter<string>();

  constructor() { }

  test() {
    this.doneEditing.emit(this.data.value);
  }
    
  ngOnInit() {
  }
}
