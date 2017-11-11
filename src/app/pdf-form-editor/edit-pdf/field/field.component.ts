import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

import { Model } from './../../model/PdfForm';

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit, AfterContentInit {

  @Input() data: Model.FieldData;
  @Input() location: Model.Location;
  
  constructor() { }

  ngOnInit() {
  }


    public ngAfterContentInit(): void {
      //console.log(this.Location.Name);
    }
}
