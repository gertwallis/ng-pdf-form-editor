import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { EditPagesComponent } from '../pages/pages.component';
import { Edit } from './../../model/Edit';

@Component({
  selector: 'edit-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {

  @Input() documentModel: Edit.Document;

  @ViewChild('pages') pages: EditPagesComponent;
  
  selectPrevious(){
    this.pages.previousPage();
  }

  selectPage(pageNo) {
    // this.pages.selectPage()
    this.pages.setPage(pageNo);
  }

  selectNext() {
    this.pages.nextPage();
  }

  incrementZoom(zoomFactor: number) {
    this.pages.incrementZoom(zoomFactor);
  }

  constructor() {
  }

  ngOnInit() {
  }
}
