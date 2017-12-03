import { DisplayPdfComponent } from './../display/display-pdf.component';
import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList, ViewChild, ViewChildren, } from '@angular/core';

import { TabComponent } from './../tab/tab.component';
import { PdfViewerComponent } from 'ng2-pdf-viewer/dist/pdf-viewer.component';
import { EditPageComponent } from './../page/page.component';

// Models
import { UI } from './../../model/UI';
import { Base } from './../../model/Base';
import { Edit } from './../../model/Edit';

@Component({
  selector: 'edit-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class EditPagesComponent implements AfterContentInit {

  @Input() documentModel: Edit.Document = null;
  @Input() locked = true; // Make values already entered unchangable.
  @Input() shade = true; // Make background 50% transparent to highlight fields.

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @ViewChildren(EditPageComponent) pageViews: QueryList<EditPageComponent>;
  @ViewChild('viewer') viewer: DisplayPdfComponent;

  currentPageNo: number;
  editMode = false;
  currentZoom = 0;
  noOfPages: number;

  pageSize: {};

  constructor() {
    this.currentPageNo = 1;
  }

  nextPage() {
    this.viewer.incrementPage(1);
    this.currentPageNo = (this.currentPageNo === this.documentModel.pages.length) ? 1 : this.currentPageNo + 1;
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
    this.currentPageNo = (this.currentPageNo === 1) ? this.documentModel.pages.length : this.currentPageNo - 1;
    this.setPage(this.currentPageNo);
  }

  setPage(no: number) {
    this.currentPageNo = no;
    const TabComponent = this.tabs.filter(page => page.pageNo === this.currentPageNo);
    const EditPageComponent = this.pageViews.filter(x => x.editPage.pageNo === this.currentPageNo);

    if (TabComponent.length === 1 && EditPageComponent.length === 1) {
      this.selectPage(TabComponent[0], EditPageComponent[0]);
    }
  }

  selectPage(newTab: TabComponent, newPage: EditPageComponent) {
    // deactivate all page tabs
    this.tabs.toArray().forEach(page => page.active = false);
    this.pageViews.toArray().forEach(page => page.editPage.active = false);

    // activate the tab the user has clicked on.
    newTab.active = true;
    newPage.editPage.active = true;

    this.viewer.goToPage(newTab.pageNo);
  }

  toggleLock() {
    this.locked = !this.locked;
  }

  toggleShade() {
    this.shade = !this.shade;
  }

  // Emmittor functions
  setScale(size: UI.Size) {
    if (this.pageViews && this.currentZoom !== this.viewer.zoom) {
      this.pageSize = {
        'width': size.width + 'px',
        'height': size.height + 'px',
      };

      this.currentZoom = this.viewer.zoom;

      const scale = new UI.Scale();
      scale.horiz = size.width / this.documentModel.pageSize.width;
      scale.vertical = size.height / this.documentModel.pageSize.height;

      this.pageViews.forEach(page => {
        page.setScale(size, scale);
      });
    }
  }

  base64ToArrayBuffer(base64) {
    const binary_string = window.atob(base64);
    const len = binary_string.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }

  public ngAfterContentInit(): void {
    if (this.documentModel.pdfBytes) {
      this.viewer.pdfSrc = this.base64ToArrayBuffer(this.documentModel.pdfBytes);
    } else if (this.documentModel.url) {
      this.viewer.pdfSrc = this.documentModel.url;
    }

    // this.viewer.pdfSrc = this.documentModel.url;
    this.noOfPages = this.documentModel.pages.length;
  }
}
