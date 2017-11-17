import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { DocumentBase } from './../../model/DocumentBase';
import { Form } from './../../model/Form';

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() formData: Form.Data;

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
    console.log('Got Focus:' + this.formData.name);
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

    this.formData = value;
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
      'background-color': this.getBackGroundColor,
      'border': '1px solid black'
    };
  }

  getBackGroundColor() {
    switch (this.formData.state) {
      case DocumentBase.DisplayState.None:
        return 'lightpink';
      case DocumentBase.DisplayState.Captured:
        return 'lightgreen';
      case DocumentBase.DisplayState.Saved:
        return 'lightblue';
      default:
        return 'graya';
    }
  }
}
