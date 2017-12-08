import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnInit,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';

import { EditPagesComponent } from '../pages/pages.component';
import { Edit } from './../../model/Edit';

@Component({
  selector: 'edit-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements AfterContentInit, AfterViewInit {

  @Input() documentModel: Edit.Document;

  @ViewChild('pages') pages: EditPagesComponent;
  @ViewChildren('pageTab') pageTabs: QueryList<ElementRef>;

  constructor(private element: ElementRef) {

  }

  selectPrevious() {
    this.pages.previousPage();
    this.highlight(this.pages.currentPageNo);
  }

  selectPage(pageNo) {
    // this.pages.selectPage()
    this.pages.setPage(pageNo);
    this.highlight(this.pages.currentPageNo);
  }

  selectNext() {
    this.pages.nextPage();
    this.highlight(this.pages.currentPageNo);
  }

  incrementZoom() {
    this.pages.incrementZoom();
  }

  decrementZoom() {
    this.pages.decrementZoom();
  }

  resetZoom() {
    this.pages.resetZoom();
  }

  highlight(pageNo: number) {
    if (this.pageTabs) {
      let currentTab = null;
      this.pageTabs.forEach(tab => {
        if (tab.nativeElement.classList.contains('active')) {
          tab.nativeElement.classList.remove('active');
        }

        if (tab.nativeElement.innerText === pageNo.toString()) {
          currentTab = tab.nativeElement;
        }
      });

      if (currentTab) {
        currentTab.classList.add('active');
      }
    }
  }

  public ngAfterContentInit(): void {
  }

    public ngAfterViewInit(): void {
      this.highlight(1);
    }
}
