import { Component, Input, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, AfterContentInit } from '@angular/core';

import { EditPagesComponent } from '../pages/pages.component';
import { Edit } from './../../model/Edit';

@Component({
  selector: 'edit-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements AfterContentInit {

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

  incrementZoom(zoomFactor: number) {
    this.pages.incrementZoom(zoomFactor);
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
    this.highlight(1);
  }
}
