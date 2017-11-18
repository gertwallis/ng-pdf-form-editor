import { Component, ContentChild, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

import { DocumentBase } from './../../model/DocumentBase';
import { Form } from './../../model/Form';

@Component({
  selector: 'form-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() formField: Form.Field;
  @ViewChild('childEditField') childEditField;

  color: string;

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

    // this.childEditField.nativeElement.focus();

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

    if (value !== this.formField.value) {
      this.formField.value = value;
      this.formField.state = DocumentBase.DisplayState.EditedValue;
      this.setStyle();
    }
  }


  setLocation(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.setStyle();
  }

  private setStyle() {
    switch (this.formField.state) {
      case DocumentBase.DisplayState.NoValue:
        this.locationStyle = {
          'position': 'absolute',
          'left': this.x + 'px',
          'top': this.y + 'px',
          'width': this.width + 'px',
          'height': this.height + 'px',
          'background-color': 'lightpink'
        };
        break;

      case DocumentBase.DisplayState.EditedValue:
        this.locationStyle = {
          'position': 'absolute',
          'left': this.x + 'px',
          'top': this.y + 'px',
          'width': this.width + 'px',
          'height': this.height + 'px',
          'background-color': 'lightgreen'
        };
        break;

      case DocumentBase.DisplayState.SavedValue:
        this.locationStyle = {
          'position': 'absolute',
          'left': this.x + 'px',
          'top': this.y + 'px',
          'width': this.width + 'px',
          'height': this.height + 'px',
          'background-color': 'lightgrey',
          'display': 'none'
          // background: 'rgba(255, 255, 255, 0.5)'
        };
        break;
    }
  }
}
