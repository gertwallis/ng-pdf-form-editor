import { Component, Input, OnInit, ViewChild, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';

import { EditFieldComponent } from './../field/field.component';

import { Base } from './../../model/Base';
import { Edit } from './../../model/Edit';
import { UI } from './../../model/UI';

@Component({
  selector: 'edit-group',
  templateUrl: './group.component.html',
})
export class EditGroupComponent implements OnInit {

  @Input() active = true;
  @Input() editGroup: Edit.Group;
  @ViewChildren(EditFieldComponent) fieldViews: QueryList<EditFieldComponent>;

  private left = 0;
  private top = 0;
  private width = 0;
  private height = 0;

  locationStyle: {};

  constructor() {
  }

  ngOnInit() {
  }

  setScale(scale: UI.Scale) {
    this.left = Math.round(this.editGroup.left * scale.horiz * 10) / 10;
    this.top = Math.round(this.editGroup.top * scale.vertical * 10) / 10;
    this.width = Math.round(this.editGroup.width * scale.horiz * 10) / 10;
    this.height = Math.round(this.editGroup.height * scale.vertical * 10) / 10;

    this.fieldViews.forEach(field => {
      field.setScale(scale);
    });

    this.locationStyle = {
         'position': 'absolute',
          'left': this.left + 'px',
          'top': this.top + 'px',
          'width': this.width + 'px',
          'height': this.height + 'px',
          'border': '1px solid red'
    };
  }
}
