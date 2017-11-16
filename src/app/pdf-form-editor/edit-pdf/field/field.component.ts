import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

import { Model } from './../../model/PdfForm';

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit, AfterContentInit {

  @Input() data: Model.FieldData;
  @Input() pdf: Model.Location;
  @Input() tabIndex: number;

  location: Model.Location;
   
  locationStyle: {};

  constructor() {
    this.location = new Model.Location();
   }

  ngOnInit() {
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
    };
     console.log("UPDATED: " + this.data.name);
}

  public ngAfterContentInit(): void {
    // this.locationStyle = {
    //   'position': 'absolute',
    //   'left': this.location.x + 'px',
    //   'top': this.location.y + 'px',
    //   'width': this.location.width + 'px',
    //   'height': this.location.height + 'px',
    // };

  }
}
