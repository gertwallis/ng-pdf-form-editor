import { DisplayPdfComponent } from './../display/display-pdf.component';
import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList, ViewChild, ViewChildren, } from '@angular/core';

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

  @Input() document: Model.Document = null;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @ViewChildren(PageComponent) pages: QueryList<PageComponent>;
  @ViewChild('viewer') viewer: DisplayPdfComponent;

  pageNo: number;
  editMode = false;
  currentZoom = 0;

  constructor() {
    this.pageNo = 1;
  }

  ngOnInit() {
  }

  public ngAfterContentInit(): void {
    this.viewer.pdfSrc = this.document.url;
  }

  toggleEdit() {
    this.editMode = !this.editMode;

    // Make non editible pages to enabled / disabled.
    // const staticPages = this.document.form.pages.filter(x => !(x.locations.length > 0));
    // for (let i = 0; i < staticPages.length; i++) {
    //   const tab = this.tabs.find(x => x.pageNo === staticPages[i].pageNo);
    //   tab.disabled = this.editMode;
    // }

    this.document.form.pages.forEach(page => {
      page.active = this.editMode;
      if (page.locations.length === 0) {
        const tab = this.tabs.find(t => t.pageNo === page.pageNo);
        tab.disabled = this.editMode;
      }

    });

    this.setScale();
  }

  nextPage() {
    this.viewer.incrementPage(1);
    this.pageNo = (this.pageNo === this.document.form.pages.length) ? 1 : this.pageNo + 1;
    this.setPage(this.pageNo);
  }

  incrementZoom(amount: number) {
    this.viewer.incrementZoom(amount);
    this.setScale();

  }

  resetZoom() {
    this.viewer.zoom = 1;
  }

  previousPage() {
    this.viewer.incrementPage(-1);
    this.pageNo = (this.pageNo === 1) ? this.document.form.pages.length : this.pageNo - 1;
    this.setPage(this.pageNo);
  }

  setPage(no: number) {
    this.pageNo = no;
    const TabComponent = this.tabs.filter(page => page.pageNo === this.pageNo);
    const PageComponent = this.pages.filter(x => x.page.pageNo === this.pageNo);

    if (TabComponent.length === 1 && PageComponent.length === 1) {
      this.selectPage(TabComponent[0], PageComponent[0]);
    }
  }

  setScale() {
    if (this.pages && this.currentZoom !== this.viewer.zoom) {
      this.currentZoom = this.viewer.zoom;

      const width = document.getElementsByClassName('page')[0].clientWidth;
      const height = document.getElementsByClassName('page')[0].clientHeight;
      // TODO: Get the scale based of the pdf viewport.
      const scale = new Model.Scale();
      scale.width = width;
      scale.height = height;

      scale.horiz = scale.width / this.document.form.pageSize.width;
      scale.vertical = scale.height / this.document.form.pageSize.height;

      this.pages.forEach(page => {
        page.setPageSize(width, height);
        page.fieldView.forEach(field => {
          field.setLocation(
            field.pdf.x * scale.horiz,
            field.pdf.y * scale.vertical,
            field.pdf.width * scale.horiz,
            field.pdf.height * scale.vertical);
        });
      });
    }
  }

  selectPage(newTab: TabComponent, newPage: PageComponent) {
    // deactivate all page tabs
    this.tabs.toArray().forEach(page => page.active = false);
    this.pages.toArray().forEach(page => page.active = false);

    // activate the tab the user has clicked on.
    newTab.active = true;
    newPage.active = true;

    this.viewer.goToPage(newTab.pageNo);
  }
}
