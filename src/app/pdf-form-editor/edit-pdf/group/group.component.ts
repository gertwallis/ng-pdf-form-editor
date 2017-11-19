import { Component, Input, OnInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';

import { FieldComponent } from './../field/field.component';

import { DocumentBase } from './../../model/DocumentBase';
import { Form } from './../../model/Form';
import { UI } from 'app/pdf-form-editor/model/UI';

@Component({
  selector: 'form-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  @Input() active = true;
  @Input() formGroup: Form.Group;
  @ViewChildren(FieldComponent) fieldViews: QueryList<FieldComponent>;

  // @Output() fieldEvent = new EventEmitter<UI.EditEvent>();

  private left = 0;
  private top = 0;
  private width = 0;
  private height = 0;

  locationStyle: {};

  editingStyle: {};

  constructor(private divRef: ElementRef) {
  }

  ngOnInit() {
    this.editingStyle = {
      'display': 'none',
    };
  }

  // gotFocus() {
  //   console.log('Got Focus:' + this.formField.name);

  //   const editEvent = new UI.EditEvent();
  //   editEvent.type = UI.EventType.Enter;
  //   editEvent.name = this.formField.name;
  //   this.fieldEvent.emit(editEvent);
  //   // this.childEditField.nativeElement.focus();

  //   this.editingStyle = {
  //     'display': 'block',
  //     'width': this.width + 'px',
  //     'height': this.height + 'px'
  //   };
  // }

  // lostFocus() {
  //   console.log('Lost Focus:' + this.formField.name);
  // }

  // doneEditing(value: UI.EditEvent) {
  //   console.log('Done  editing:' + value);

  //   this.active = false;
  //   if (value.value !== this.formField.value) {
  //     this.formField.value = value.value;
  //     this.formField.state = DocumentBase.DisplayState.EditedValue;
  //     this.setStyle();
  //   }

  //   // Move focus to the next element
  //   //  this.divRef.nativeElement.nextSibling.focus();
  // }

  setScale(scale: UI.Scale) {
    this.left = this.formGroup.left * scale.horiz;
    this.top = this.formGroup.top * scale.vertical;
    this.width = this.formGroup.width * scale.horiz;
    this.height = this.formGroup.height * scale.vertical;
    // this.pageSize = {
    //   'width': width + 'px',
    //   'height': height + 'px',
    // };

    this.fieldViews.forEach(field => {
      field.setScale(scale);
    });
  }

  // setLocation(x: number, y: number, width: number, height: number) {
  //   this.left = x;
  //   this.top = y;
  //   this.width = width;
  //   this.height = height;

  //   this.setStyle();
  // }

  private setStyle() {
    // switch (this.formField.state) {
    //   case DocumentBase.DisplayState.NoValue:
    //     this.locationStyle = {
    //       'position': 'absolute',
    //       'left': this.left + 'px',
    //       'top': this.top + 'px',
    //       'width': this.width + 'px',
    //       'height': this.height + 'px',
    //       'background-color': 'lightpink'
    //     };
    //     break;

    //   case DocumentBase.DisplayState.EditedValue:
    //     this.locationStyle = {
    //       'position': 'absolute',
    //       'left': this.left + 'px',
    //       'top': this.top + 'px',
    //       'width': this.width + 'px',
    //       'height': this.height + 'px',
    //       'background-color': 'lightgreen'
    //     };
    //     break;

    //   case DocumentBase.DisplayState.SavedValue:
    //     this.locationStyle = {
    //       'position': 'absolute',
    //       'left': this.left + 'px',
    //       'top': this.top + 'px',
    //       'width': this.width + 'px',
    //       'height': this.height + 'px',
    //       'background-color': 'lightgrey',
    //       'display': 'none'
    //       // background: 'rgba(255, 255, 255, 0.5)'
    //     };
    //     break;
  }
}
