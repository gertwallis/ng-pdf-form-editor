import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { Model } from './../../model/PdfForm';

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() data: Model.FieldData;
  @Input() pdf: Model.Location;
  @Input() tabIndex: number;

  // @ViewChild('editContainer') editContainer: ElementRef;

  location: Model.Location;

  locationStyle: {};

  busyEditing: boolean = false;
  public editingClass = 'inactiveStyle';
  editingStyle: {};

  constructor() {
    this.location = new Model.Location();
  }

  ngOnInit() {
    this.editingStyle = {
      'display': 'none',
    }
  }

  gotFocus() {
    console.log('Got Focus:' + this.data.name);
    // this.editingClass = 'editStyle'

    this.editingStyle = {
      'display': 'block',
      'width': this.location.width + 'px',
      'height': this.location.height + 'px'
    }
  }

  doneEditing(value) {
    console.log('Done  editing:' + value);
    this.editingStyle = {
      'display': 'none',
    };
  }

  setLocation(x: number, y: number, width: number, height: number) {
    this.location.x = x;
    this.location.y = y;
    this.location.width = width;
    this.location.height = height;

    this.locationStyle = {
      'position': 'absolute',
      'left': this.location.x + 'px',
      'top': this.location.y + 'px',
      'width': this.location.width + 'px',
      'height': this.location.height + 'px',
      'background-color': 'lightgreen',
      'border': '1px solid black'
    };
  }
}
