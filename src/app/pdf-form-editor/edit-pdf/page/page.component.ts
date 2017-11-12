import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

import { Model } from './../../model/PdfForm';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, AfterContentInit {

   @Input() active = false;
   @Input() page: Model.Page;
   @Input() data: Model.FormData;

  constructor() { }

  ngOnInit() {
  }

  getData(name): Model.FieldData {
    return this.data.findField(name);
  }

    public ngAfterContentInit(): void {
      console.log('loading page');
    }
}
