import { PdfFormPageTabComponent } from './../pdf-form-pagetab/pdf-form-pagetab.component';
import { Component, ContentChildren, OnInit, QueryList, AfterContentInit } from '@angular/core';


@Component({
  selector: 'pdf-form-pagetabs',
  templateUrl: './pdf-form-pagetabs.component.html',
  styleUrls: ['./pdf-form-pagetabs.component.css']
})
export class PdfFormTabsComponent implements OnInit, AfterContentInit {

  @ContentChildren(PdfFormPageTabComponent) pages: QueryList<PdfFormPageTabComponent>;

  constructor() { }

  ngOnInit() {
  }


  public ngAfterContentInit(): void {
    const activePages = this.pages.filter((page) => page.active);

    // if there is no active tab set, activate the first
    if (activePages.length === 0) {
      this.selectTab(this.pages.first);
    }

  }

  selectTab(newPage: PdfFormPageTabComponent) {
    // deactivate all tabs
    this.pages.toArray().forEach(page => page.active = false);

    // activate the tab the user has clicked on.
    newPage.active = true;
  }
}
