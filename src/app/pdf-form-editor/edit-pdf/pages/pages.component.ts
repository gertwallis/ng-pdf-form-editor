import { Subscription } from 'rxjs/Rx';
import {
    AfterContentInit,
    Component,
    ContentChildren,
    Input,
    OnDestroy,
    OnInit,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';

// Service
import { PageNavigationService } from '../../service/page-navigation.service';

import { DisplayPdfComponent } from './../display/display-pdf.component';
import { PdfViewerComponent } from 'ng2-pdf-viewer/dist/pdf-viewer.component';
import { EditPageComponent } from './../page/page.component';

import { Base } from './../../model/Base';
import { Edit } from './../../model/Edit';

// Models
import { UI } from 'app/pdf-form-editor/model/UI';

@Component({
  selector: 'edit-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class EditPagesComponent implements AfterContentInit, OnDestroy {

  @Input() editDocument: Edit.Document = null;
  @Input() preferences = UI.Preferences; // Make values already entered unchangable.
  @Input() shade = true; // Make background 50% transparent to highlight fields.

  @ViewChildren(EditPageComponent) pageViews: QueryList<EditPageComponent>;
  @ViewChild('viewer') viewer: DisplayPdfComponent;

  currentPageNo: number;
  editMode = false;
  currentZoom = 0;

  pageSize: {};

  lockSubscription: Subscription;
  shadeSubscription: Subscription;
  pageSubscription: Subscription;
  zoomSubscription: Subscription;

  constructor(private navigationService: PageNavigationService) {
    this.currentPageNo = 1;

    this.lockSubscription = this.navigationService.LockState
    .subscribe((lock: boolean) => {
      this.lockPages(lock);
    });
    this.shadeSubscription = this.navigationService.ShadeState
    .subscribe((shade: boolean) => {
      this.shadePages(shade);
    });
    this.pageSubscription = this.navigationService.PageState
    .subscribe((pageNo: number) => {
      this.goToPage(pageNo);
    });
    this.zoomSubscription = this.navigationService.ZoomState
    .subscribe((zoomNo: number) => {
      this.zoomTo(zoomNo);
    });
  }

  private lockPages(lock: boolean) {
    console.log(' LOCK ' + lock);
  }

  private shadePages(shade: boolean) {
    console.log('SHADE PAGES' + shade);
  }

  // goToPage(pageNo: number) {
  //   console.log('PAGE NO' + pageNo);
  //   this.setPage(pageNo);
  // }

  zoomTo(zoomNo: number) {
    console.log('ZOOM NO' + zoomNo);
    this.viewer.zoom = zoomNo;
  }

  public ngAfterContentInit(): void {
    this.viewer.pdfSrc = this.editDocument.url;
  }

  ngOnDestroy() {
    this.lockSubscription.unsubscribe();
    this.shadeSubscription.unsubscribe();
    this.pageSubscription.unsubscribe();
    this.zoomSubscription.unsubscribe();
  }

  // nextPage() {
  //   this.viewer.incrementPage(1);
  //   this.currentPageNo = (this.currentPageNo === this.editDocument.pages.length) ? 1 : this.currentPageNo + 1;
  //   this.setPage(this.currentPageNo);
  // }

  // incrementZoom(amount: number) {
  //   this.viewer.incrementZoom(amount);
  // }

  // previousPage() {
  //   this.viewer.incrementPage(-1);
  //   this.currentPageNo = (this.currentPageNo === 1) ? this.editDocument.pages.length : this.currentPageNo - 1;
  //   this.setPage(this.currentPageNo);
  // }

  goToPage(pageNo: number) {

    console.log('GO TO PAGE' + pageNo);
    this.viewer.goToPage(pageNo);

    this.currentPageNo = pageNo;
    this.selectPage(pageNo);
  }

  selectPage(pageNo: number) {

    this.pageViews.forEach(page => {
      page.editPage.active = false;
    });

    const newPage = this.pageViews.filter(x => x.editPage.pageNo === pageNo);
    // activate the page the user has clicked on.
    // newPage.first .active = true;
    newPage[0].active = true;
  }

  // Emmittor function
  setScale(size: UI.Size) {
    // if (this.pageViews && this.currentZoom !== this.viewer.zoom)
     {
      this.pageSize = {
        'width': size.width + 'px',
        'height': size.height + 'px',
      };

      // this.currentZoom = this.viewer.zoom;

      const scale = new UI.Scale();
      scale.horiz = size.width / this.editDocument.pageSize.width;
      scale.vertical = size.height / this.editDocument.pageSize.height;

      this.pageViews.forEach(page => {
        page.setScale(size, scale);
      });
    }
  }
}
