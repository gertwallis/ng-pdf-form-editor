import { Component, ContentChildren, OnInit, QueryList, AfterContentInit } from '@angular/core';

import { PdfFormPageTabComponent } from './../page-tab/page-tab.component';

@Component({
  selector: 'pdf-form-pagetabs',
  templateUrl: './page-tabs.component.html',
  styleUrls: ['./page-tabs.component.css']
})
export class PdfFormPageTabsComponent implements OnInit, AfterContentInit {

  @ContentChildren(PdfFormPageTabComponent) pages: QueryList<PdfFormPageTabComponent>;

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

  selectPage(newPage: PdfFormPageTabComponent) {
    // deactivate all page tabs
    this.pages.toArray().forEach(page => page.active = false);

    // activate the tab the user has clicked on.
    newPage.active = true;
  }
}
