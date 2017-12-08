import { DisplayPdfComponent } from './../display/display-pdf.component';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { EditPageComponent } from './../page/page.component';

// Models
import { UI } from './../../model/UI';
import { Base } from './../../model/Base';
import { Edit } from './../../model/Edit';

@Component({
  selector: 'edit-pages',
  templateUrl: './pages.component.html',
})
export class EditPagesComponent implements AfterContentInit {

  @Input() documentModel: Edit.Document = null;
  @Input() locked = true; // Make values already entered unchangable.
  @Input() shade = true; // Make background 50% transparent to highlight fields.

  @ViewChildren(EditPageComponent) pageViews: QueryList<EditPageComponent>;
  @ViewChild('viewer') viewer: DisplayPdfComponent;

  currentPageNo: number;
  currentZoom: number;
  editMode = false;
  preferences: UI.Preferences;
  noOfPages: number;

  pageSize: {};

  constructor() {
    this.currentPageNo = 1;
    this.preferences = new UI.Preferences();
  }

  nextPage() {
    this.currentPageNo = (this.currentPageNo === this.documentModel.pages.length) ? 1 : this.currentPageNo + 1;
    this.setPage(this.currentPageNo);
  }

  incrementZoom() {
    this.currentZoom += this.preferences.zoomIncrement;
    this.setZoom();
  }

  decrementZoom() {
    this.currentZoom -= this.preferences.zoomIncrement;
    this.setZoom();
  }

  resetZoom() {
    this.currentZoom = this.preferences.defaultZoom;
    this.setZoom();
  }

  setZoom() {
    // const pageModel = this.documentModel.pages.find(page => page.pageNo === this.currentPageNo);
    // pageModel.active = false;
  
    this.viewer.setZoom(this.currentZoom);
//    pageModel.active = true;
  }

  previousPage() {
    this.currentPageNo = (this.currentPageNo === 1) ? this.documentModel.pages.length : this.currentPageNo - 1;
    this.setPage(this.currentPageNo);
  }

  setPage(pageNo: number) {
    this.currentPageNo = pageNo;
    this.viewer.goToPage(pageNo);
    
    const EditPageComponent = this.pageViews.filter(x => x.editPage.pageNo === pageNo);
  
    if (EditPageComponent.length === 1) {
      this.selectPage(EditPageComponent[0]);
    }
  }

  selectPage(newPage: EditPageComponent) {
    this.pageViews.toArray().forEach(page => page.editPage.active = false);

    // activate the tab the user has clicked on.
    newPage.editPage.active = true;

  }

  toggleLock() {
    this.locked = !this.locked;
  }

  toggleShade() {
    this.shade = !this.shade;
  }

  // Emmittor functions
  setScale(size: UI.Size) {
    console.log('SET SCALE: ' + size.width + ' / ' + size.height);
    if (this.pageViews) {
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


  public ngAfterContentInit(): void {
    this.currentZoom = this.preferences.defaultZoom;
    this.viewer.zoom = this.currentZoom;
    if (this.documentModel.url) {
      this.viewer.setPdfSourceURL(this.documentModel.url);
    } else if (this.documentModel.pdfBytes) {
      this.viewer.setPdfSourceBase64(this.documentModel.pdfBytes);
    }
    // this.viewer.pdfSrc = this.documentModel.url;
    this.noOfPages = this.documentModel.pages.length;

    setTimeout(() => {

        // KLUDGE to set the initial width/height - based on defaults from ng2-pdf-viewer.
        // Would like to get that from the UI - would only work if zoom is 1.
        const size = new UI.Size();
        size.width = 816;
        size.height = 1056;
        this.setScale(size);

        // Have to wait for all the child components to intialize before we make the first page visible.  
        this.setPage(1);
      }, 1000);
}
}