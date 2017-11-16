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
  @ViewChildren(PageComponent) pageViews: QueryList<PageComponent>;
  @ViewChild('viewer') viewer: DisplayPdfComponent;

  pageNo: number;
  editMode = false;
  currentZoom = 0;

  formPages: Model.FormPage[] = null;

  constructor() {
    this.pageNo = 1;
  }

  ngOnInit() {
  }

  public ngAfterContentInit(): void {
    this.viewer.pdfSrc = this.document.url;
    this.buildFormModel();
  }

  toggleEdit() {
    this.editMode = !this.editMode;

    this.document.form.pages.forEach(page => {
      // page.active = this.editMode;
      if (page.locations.length === 0) {
        const tab = this.tabs.find(t => t.pageNo === page.pageNo);
        tab.disabled = this.editMode;
      }

    });
  }

  nextPage() {
    this.viewer.incrementPage(1);
    this.pageNo = (this.pageNo === this.document.form.pages.length) ? 1 : this.pageNo + 1;
    this.setPage(this.pageNo);
  }

  buildFormModel() {

    for (let page of this.document.form.pages) {
      const formPage = new Model.FormPage();

      formPage.pageNo = page.pageNo;

      console.log('PAGENO:' + page.pageNo);
      for (let location of page.locations) {
        const formField = new Model.FormField();
        formField.data = this.getFieldData(location.name);
        if (formField.data.state != Model.DisplayState.Hidden) {
          formField.location = location;
          formPage.fields.push(formField);
        }
      }
    }
  }

  getFieldData(fieldName): Model.FieldData {
    const fields = this.document.form.data.fields.filter(x => x.name === name);

    // Expecting to find only one but if more - return first.
    if (fields.length > 0) {
      return fields[0];
    }

    // Returning an empty object - the use case is generally to display the data field.
    // for a location. Bad data but returning an undefined will trow an error in the UI
    // based on bad data. Should probably do avalidation check for good data. but don't want
    // UI have to check for bad data.
    return new Model.FieldData();
  }

  incrementZoom(amount: number) {
    this.viewer.incrementZoom(amount);
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
    const PageComponent = this.pageViews.filter(x => x.formPage.pageNo === this.pageNo);

    if (TabComponent.length === 1 && PageComponent.length === 1) {
      this.selectPage(TabComponent[0], PageComponent[0]);
    }
  }

  setScale(size: Model.Size) {
    if (this.pageViews && this.currentZoom !== this.viewer.zoom) {
      this.currentZoom = this.viewer.zoom;

      // const size = new Model.Size();
      // size.width = size.width;
      // size.height = size.height;

      const horiz = size.width / this.document.form.pageSize.width;
      const vertical = size.height / this.document.form.pageSize.height;

      this.pageViews.forEach(page => {
        page.setPageSize(size.width, size.height);
        page.fieldView.forEach(field => {
          field.setLocation(
            field.formField.location.x * horiz,
            field.formField.location.y * vertical,
            field.formField.location.width * horiz,
            field.formField.location.height * vertical);
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
