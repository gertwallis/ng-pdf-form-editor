import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { DocumentBase } from './../../model/DocumentBase';
import { Form } from './../../model/Form';

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() formField: Form.Field;

  tabIndex = 0;

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
    console.log('Got Focus:' + this.formField.name);

    this.editingStyle = {
      'display': 'block',
      'width': this.width + 'px',
      'height': this.height + 'px'
    };
  }

  lostFocus() {
    console.log('Lost Focus:' + this.formField.name);
  }

  doneEditing(value) {
    console.log('Done  editing:' + value);

    this.editingStyle = {
      'display': 'none',
    };

    this.formField.value = value;
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
      'height': height + 'px'
    };

    this.addFieldStyles();
  }

  addFieldStyles() {
//    this.locationStyle.push('background-color': ''lightpink';
//     border: 1px solid black;')
  }

  getBackGroundColor() {
    switch (this.formField.state) {
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
