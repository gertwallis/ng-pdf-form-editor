import { Component, Input, OnInit, QueryList, ViewChildren, Output, EventEmitter } from '@angular/core';

import { EditGroupComponent } from './../group/group.component';

import { Edit } from './../../model/Edit';
import { UI } from 'app/pdf-form-editor/model/UI';

@Component({
  selector: 'edit-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class EditPageComponent implements OnInit {

  @Input() active: boolean;
  @Input() editPage: Edit.Page;

  @ViewChildren(EditGroupComponent) groupViews: QueryList<EditGroupComponent>;

  pageSize: {};

  constructor() {
  }

  ngOnInit() {
  }

  setScale(width: number, height: number, scale: UI.Scale) {
    this.pageSize = {
      'width': width + 'px',
      'height': height + 'px',
    };

    this.groupViews.forEach(group => {
      group.setScale(scale);
    });
  }

}
