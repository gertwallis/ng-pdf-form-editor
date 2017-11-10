import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

import { Model } from './../../model/PdfForm';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

   @Input() active = false;
   @Input() editPage: Model.Page;
   
  constructor() { }

  ngOnInit() {
    console.log("TESTING" +this. editPage.PageNo);
  }
}
