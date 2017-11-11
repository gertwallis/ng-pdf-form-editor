import { DisplayPdfComponent } from './../display/display-pdf.component';
import { AfterContentInit, AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList, ViewChild } from '@angular/core';

import { TabComponent } from './../tab/tab.component';
import { PdfViewerComponent } from 'ng2-pdf-viewer/dist/pdf-viewer.component';
import { PageComponent } from './../page/page.component';

import { Model } from './../../model/PdfForm';

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit, AfterContentInit {

  @Input() form: Model.Form;
  @ContentChildren(TabComponent) pages: QueryList<TabComponent>;
  @ViewChild('viewer') viewer: DisplayPdfComponent;

  constructor() { }

  ngOnInit() {
  }

  public ngAfterContentInit(): void {
    // this.viewer.pdfSrc = this.Form.Url;
   }

   edit() {
     console.log('Show editing screen');
   }

  nextPage() {
    this.viewer.incrementPage(1);
    this.setPage();
  }

  previousPage(){
    this.viewer.incrementPage(-1);
    this.setPage();
  }

  setPage() {
    const TabComponent = this.pages.filter(page => page.pageNo === this.viewer.page)

    if (TabComponent.length === 1) {
      this.selectPage(TabComponent[0]);
    }
  }

  selectPage(newPage: TabComponent) {
    // deactivate all page tabs
    this.pages.toArray().forEach(page => page.active = false);

    // activate the tab the user has clicked on.
    newPage.active = true;

    this.viewer.goToPage(newPage.pageNo);
  }
}
