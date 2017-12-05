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
    console.log('PREVIOUS');
    this.pages.previousPage();
  }

  selectPage(pageNo) {
    console.log('SELECT: ' + pageNo);
    // this.pages.selectPage()
    this.pages.setPage(pageNo);
  }

  selectNext() {
    console.log('NEXT');
    this.pages.previousPage();
  }

  incrementZoom(zoomFactor: number) {
    console.log('ZOOM: ' + zoomFactor);
    this.pages.incrementZoom(zoomFactor);
  }

  constructor() {
  }

  ngOnInit() {
  }
}
