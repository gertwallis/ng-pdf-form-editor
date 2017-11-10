import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

import { Model } from './../../model/PdfForm';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, AfterContentInit {

   @Input() active = false;
   @Input() Page: Model.Page;
   @Input() FieldData: Model.FieldData;
   
  constructor() { }

  ngOnInit() {
  }

  getData(name): Model.DataField {
    return new Model.DataField();
  }

    public ngAfterContentInit(): void {
      console.log("loading page");
    }
}
