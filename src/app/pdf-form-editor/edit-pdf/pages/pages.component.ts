import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';

import { PdfFormPageComponent } from './../page/page.component';

import { Model } from './../../model/PdfForm';

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PdfFormPagesComponent implements OnInit, AfterContentInit {

  @Input() Form: Model.Form;

  @ContentChildren(PdfFormPageComponent) pages: QueryList<PdfFormPageComponent>;

  constructor() { }

  ngOnInit() {
  }


  public ngAfterContentInit(): void {
    // const activePages = this.pages.filter((page) => page.active);

    // // if there is no active tab set, activate the first
    // if (activePages.length === 0 && this.pages.length > 0) {
    //    this.selectPage(this.pages.first);
    // }
  }

  selectPage(newPage: PdfFormPageComponent) {
    // deactivate all page tabs
    this.pages.toArray().forEach(page => page.active = false);

    // activate the tab the user has clicked on.
    newPage.active = true;
  }
}
