import { DisplayPdfComponent } from './../display/display-pdf.component';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
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

  @Input() form: Model.Form;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @ViewChildren(PageComponent) pages: QueryList<PageComponent>;
  @ViewChild('viewer') viewer: DisplayPdfComponent;

  pageNo: number;

  constructor() {
    this.pageNo = 1;
  }

  ngOnInit() {
  }

  public nonteNontInit(): void {
    this.viewer.pdfSrc = this.form.url;
  }

  public ngAfterContentInit(): void {
    this.setScale();
  }

  edit() {
    console.log('Show editing screen');
  }

  nextPage() {
    this.viewer.incrementPage(1);
    this.pageNo = (this.pageNo === this.form.noOfPages()) ? 1 : this.pageNo + 1;
    this.setPage(this.pageNo);
  }

  previousPage() {
    this.viewer.incrementPage(-1);
    this.pageNo = (this.pageNo === 1) ? this.form.noOfPages() : this.pageNo - 1;
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
    // TODO: Get the scale based of the pdf viewport.
    const scale = new Model.Scale();
    scale.horiz = 0.1;
    scale.vertical = 0.15;
    scale.height = 800;
    scale.width = 1000;
    this.form.scale = scale;
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
