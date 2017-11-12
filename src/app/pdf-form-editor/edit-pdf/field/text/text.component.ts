import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

import { Model } from './../../../model/PdfForm';

@Component({
  selector: 'text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit, AfterContentInit {

  @Input() data: Model.FieldData;
  @Input() location: Model.Location;

  inputSize: {};
  inputPosition: {};

  constructor() { }

  ngOnInit() {
  }


  public ngAfterContentInit(): void {
    this.inputSize = {
      // 'font-style':  this.canSave      ? 'italic' : 'normal',
      // 'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      // 'font-size':   this.isSpecial    ? '24px'   : '12px'
      'padding': '20px 10px',
      'line-height': '28px'
    };
    this.inputPosition = {
      'position': 'absolute',
      'left': this.location.x + 'px',
      'top': this.location.y + 'px'
    };
  }
}
