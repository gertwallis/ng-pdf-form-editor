import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { Model } from './../../model/PdfForm';

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {


  @Input() formField: Model.FormField;

  private x = 0;
  private y = 0;
  private width = 0;
  private height = 0;

  locationStyle: {};

  editingStyle: {};

  constructor() {
  }

  ngOnInit() {
    this.editingStyle = {
      'display': 'none',
    };
  }

  gotFocus() {
    console.log('Got Focus:' + this.formField.data.name);
    // this.editingClass = 'editStyle'

    this.editingStyle = {
      'display': 'block',
      'width': this.width + 'px',
      'height': this.height + 'px'
    };
  }

  doneEditing(value) {
    this.editingStyle = {
      'display': 'none',
    };

    this.formField.data = value;
  }

  dataChanged(something) {
    console.log('Done  editing:' + something);
    this.editingStyle = {
      'display': 'none',
    };
  }

  setLocation(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.locationStyle = {
      'position': 'absolute',
      'left': x + 'px',
      'top': y + 'px',
      'width': width + 'px',
      'height': height + 'px',
      'background-color': 'lightpink',
      'border': '1px solid black'
    };
  }
}
