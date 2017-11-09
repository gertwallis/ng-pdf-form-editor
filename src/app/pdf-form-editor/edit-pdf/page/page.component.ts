import { Component, Input, OnInit } from '@angular/core';

import { Model } from './../../model/PdfForm';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PdfFormPageComponent implements OnInit {

 //  @Input('pageNo') pageNo: number;
   @Input() Page: Model.Page;
   @Input() active = false;

  constructor() { }

  ngOnInit() {
  }

}
