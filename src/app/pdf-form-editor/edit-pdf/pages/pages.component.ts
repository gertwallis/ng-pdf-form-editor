import { DisplayPdfComponent } from './../display/display-pdf.component';
import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList, ViewChild, ViewChildren, } from '@angular/core';

import { TabComponent } from './../tab/tab.component';
import { PdfViewerComponent } from 'ng2-pdf-viewer/dist/pdf-viewer.component';
import { PageComponent } from './../page/page.component';

import { DocumentBase } from './../../model/DocumentBase';
import { Form } from './../../model/Form';

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit, AfterContentInit {

  @Input() document: Form.Document = null;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @ViewChildren(PageComponent) pageViews: QueryList<PageComponent>;
  @ViewChild('viewer') viewer: DisplayPdfComponent;

  currentPageNo: number;
  editMode = false;
  currentZoom = 0;

  constructor() {
    this.currentPageNo = 1;
  }

  ngOnInit() {
  }

  public ngAfterContentInit(): void {
    this.viewer.pdfSrc = this.document.url;
  }

  toggleEdit() {
    this.editMode = !this.editMode;

    this.document.pages.forEach(page => {
      // page.active = this.editMode;
      // if (page.locations.length === 0) {
      //   const tab = this.tabs.find(t => t.pageNo === page.pageNo);
      //   tab.disabled = this.editMode;
      // }

    });
  }

  nextPage() {
    this.viewer.incrementPage(1);
    this.currentPageNo = (this.currentPageNo === this.document.pages.length) ? 1 : this.currentPageNo + 1;
    this.setPage(this.currentPageNo);
  }

  incrementZoom(amount: number) {
    this.viewer.incrementZoom(amount);
  }

  resetZoom() {
    this.viewer.zoom = 1;
  }

  previousPage() {
    this.viewer.incrementPage(-1);
    this.currentPageNo = (this.currentPageNo === 1) ? this.document.pages.length : this.currentPageNo - 1;
    this.setPage(this.currentPageNo);
  }

  setPage(no: number) {
    this.currentPageNo = no;
    const TabComponent = this.tabs.filter(page => page.pageNo === this.currentPageNo);
    const PageComponent = this.pageViews.filter(x => x.formPage.pageNo === this.currentPageNo);

    if (TabComponent.length === 1 && PageComponent.length === 1) {
      this.selectPage(TabComponent[0], PageComponent[0]);
    }
  }

  setScale(size: DocumentBase.Size) {
    if (this.pageViews && this.currentZoom !== this.viewer.zoom) {
      this.currentZoom = this.viewer.zoom;

      const horiz = size.width / this.document.pageSize.width;
      const vertical = size.height / this.document.pageSize.height;

      this.pageViews.forEach(page => {
        page.setPageSize(size.width, size.height);
        page.fieldView.forEach(field => {
          field.setLocation(
            field.formData.location.x * horiz,
            field.formData.location.y * vertical,
            field.formData.location.width * horiz,
            field.formData.location.height * vertical);
        });
      });
    }
  }

  selectPage(newTab: TabComponent, newPage: PageComponent) {
    // deactivate all page tabs
    this.tabs.toArray().forEach(page => page.active = false);
    this.pageViews.toArray().forEach(page => page.active = false);

    // activate the tab the user has clicked on.
    newTab.active = true;
    newPage.active = true;

    this.viewer.goToPage(newTab.pageNo);
  }
}
