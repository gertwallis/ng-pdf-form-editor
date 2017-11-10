import { DisplayPdfComponent } from './../display/display-pdf.component';
import { AfterContentInit, AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList, ViewChild } from '@angular/core';

import { PdfFormPageComponent } from './../page/page.component';
import { PdfViewerComponent } from 'ng2-pdf-viewer/dist/pdf-viewer.component';

import { Model } from './../../model/PdfForm';

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PdfFormPagesComponent implements OnInit, AfterContentInit {

  @Input() Form: Model.Form;

  @ContentChildren(PdfFormPageComponent) pages: QueryList<PdfFormPageComponent>;
  @ViewChild('viewer') viewer: DisplayPdfComponent;

  constructor() { }

  ngOnInit() {
  }

  public ngAfterContentInit(): void {
    this.viewer.pdfSrc = this.Form.Url;
    const pageArray = this.pages.toArray();
    for (let i = 0; i < pageArray.length; i++) {
      pageArray[i].PageLabel = i + 1;
    }

    // this.selectPage(this.pages.first);
    }

  selectPage(newPage: PdfFormPageComponent) {
    // deactivate all page tabs
    this.pages.toArray().forEach(page => page.active = false);

    // activate the tab the user has clicked on.
    newPage.active = true;

    this.viewer.goToPage(newPage.PageLabel);
  }
}
