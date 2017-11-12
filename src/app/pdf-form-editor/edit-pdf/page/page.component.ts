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

  pageSize: {};

  constructor() {
  }

  ngOnInit() {
  }


  getData(name): Model.FieldData {
    return this.data.findField(name);
  }

  public ngAfterContentInit(): void {
    // TODO: This will be determined by the rendered size of the pdf
    // this.page.pageSize.height = 1100;
    // this.page.pageSize.width = 680;
    // this.pageSize = {
    //   'position': 'absolute',
    //   'width': this.page.pageSize.width + 'px',
    //   'height': this.page.pageSize.height + 'px'
    // };
  }
}
