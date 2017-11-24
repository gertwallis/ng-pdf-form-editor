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
import { TabComponent } from './../tab/tab.component';
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

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @ViewChildren(EditPageComponent) pageViews: QueryList<EditPageComponent>;
  @ViewChild('viewer') viewer: DisplayPdfComponent;

  currentPageNo: number;
  editMode = false;
  currentZoom = 0;

  pageSize: {};

  lockSubscription: Subscription;
  shadeSubscription: Subscription;
  pageSubscription: Subscription;
  changeScaleSubscription: Subscription;

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
    this.changeScaleSubscription = this.navigationService.ChangeScaleState
    .subscribe((scale: UI.Size) => {
      this.setScale(scale);
    });
  }

  private lockPages(lock: boolean) {
    console.log('LOCK PAGES');
  }

  private shadePages(shade: boolean) {
    console.log('SHADE PAGES');
  }

  goToPage(pageNo: number) {
    console.log('PAGE NO');
  }

  public ngAfterContentInit(): void {
    this.viewer.pdfSrc = this.editDocument.url;
  }

  ngOnDestroy() {
    this.lockSubscription.unsubscribe();
    this.shadeSubscription.unsubscribe();
    this.pageSubscription.unsubscribe();
    this.changeScaleSubscription.unsubscribe();
  }

  lock(lock: boolean): void {
    console.log('LOCK CHANGED: ' + lock);
  }

  // nextPage() {
  //   this.viewer.incrementPage(1);
  //   this.currentPageNo = (this.currentPageNo === this.editDocument.pages.length) ? 1 : this.currentPageNo + 1;
  //   this.setPage(this.currentPageNo);
  // }

  // incrementZoom(amount: number) {
  //   this.viewer.incrementZoom(amount);
  // }

  resetZoom() {
    this.viewer.zoom = 1;
  }

  // previousPage() {
  //   this.viewer.incrementPage(-1);
  //   this.currentPageNo = (this.currentPageNo === 1) ? this.editDocument.pages.length : this.currentPageNo - 1;
  //   this.setPage(this.currentPageNo);
  // }

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

  // Emmittor functions
  setScale(size: UI.Size) {
    if (this.pageViews && this.currentZoom !== this.viewer.zoom) {
      this.pageSize = {
        'width': size.width + 'px',
        'height': size.height + 'px',
      };

      this.currentZoom = this.viewer.zoom;

      const scale = new UI.Scale();
      scale.horiz = size.width / this.editDocument.pageSize.width;
      scale.vertical = size.height / this.editDocument.pageSize.height;

      this.pageViews.forEach(page => {
        page.setScale(size, scale);
      });
    }
  }
}
