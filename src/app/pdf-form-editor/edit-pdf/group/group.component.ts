import { Component, Input, OnInit, ViewChild, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';

import { EditFieldComponent } from './../field/field.component';

import { DocumentBase } from './../../model/DocumentBase';
import { Edit } from './../../model/Edit';
import { UI } from 'app/pdf-form-editor/model/UI';

@Component({
  selector: 'edit-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class EditGroupComponent implements OnInit {

  @Input() active = true;
  @Input() editGroup: Edit.Group;
  @ViewChildren(EditFieldComponent) fieldViews: QueryList<EditFieldComponent>;

  // Event propagation
  @Output() bubbleLeaving = new EventEmitter<UI.LeaveFieldEvent>();
  @Output() bubbleEdit = new EventEmitter<UI.EditValueEvent>();

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

  catchLeaving(leaveValue: UI.LeaveFieldEvent) {
    console.log('GROUP: catch leaving:' + leaveValue.direction.toString());
    this.bubbleLeaving.emit(leaveValue);
   }

  catchEdit(editValue: UI.EditValueEvent) {
    console.log('GROUP Catch editing:' + editValue.name + ' = ' + editValue.value);
    this.bubbleEdit.emit(editValue);
  }
}
