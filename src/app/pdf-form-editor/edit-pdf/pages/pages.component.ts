import { DisplayPdfComponent } from './../display/display-pdf.component';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

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

  constructor() {
    this.pageNo = 1;
  }

  ngOnInit() {
  }

  public ngAfterContentInit(): void {
    this.viewer.pdfSrc = this.document.url;
    this.setScale(800, 1056);
  }

  toggleEdit() {
    this.editMode = !this.editMode;

    // Make non editible pages to enabled / disabled.
    const staticPages = this.document.form.pages.filter(x => !(x.locations.length > 0));
    for (let i = 0; i < staticPages.length; i++) {
      const tab = this.tabs.find(x => x.pageNo === staticPages[i].pageNo);
      tab.disabled = this.editMode;
    }

    this.setScale(document.getElementsByClassName('page')[0].clientWidth,
      document.getElementsByClassName('page')[0].clientHeight);
  }

  nextPage() {
    this.viewer.incrementPage(1);
    this.pageNo = (this.pageNo === this.document.form.pages.length) ? 1 : this.pageNo + 1;
    this.setPage(this.pageNo);
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

  setScale(width: number, height: number) {
    if (this.pages) {

      // TODO: Get the scale based of the pdf viewport.
      const scale = new Model.Scale();
      scale.width = width;
      scale.height = height;

      scale.horiz = scale.width / this.document.form.pageSize.width;
      scale.vertical = scale.height / this.document.form.pageSize.height;

      this.pages.forEach(page => {
        page.fieldView.forEach(field => {
          field.setLocation(
          field.pdf.x * scale.horiz,
          field.pdf.y * scale.vertical,
          field.pdf.width * scale.horiz,
          field.pdf.height * scale.vertical);
        });
      });
    }
    // for (const page of this.pages) {
    //   for (const location of page.locations) {
    //       location.view.y = location.pdf.y * scale.vertical;
    //       location.view.height = location.pdf.height * scale.vertical;

    //       location.view.x = location.pdf.x * scale.horiz;
    //       location.view.width = location.pdf.width * scale.horiz;
    //   }
    //}

    // this.document.form.scale = scale;
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

// Scale 1.25
// width: 1427px x 1847px;
// left: 119.527 x 373.249px;

// position: absolute;
// left: 92.2361px;
// top: 512.162px;
// width: 155.673px;

// Scale 1