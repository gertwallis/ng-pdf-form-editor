import { EditTextComponent } from './text/text.component';
import { Component, Input, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { DocumentBase } from './../../model/DocumentBase';
import { Edit } from './../../model/Edit';
import { UI } from 'app/pdf-form-editor/model/UI';

@Component({
  selector: 'edit-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class EditFieldComponent implements OnInit {

  @Input() active = true;
  @Input() editField: Edit.Field;

  @Output() fieldEvent = new EventEmitter<UI.EditEvent>();

  color: string;

  tabIndex = 0;

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

  gotFocus() {
    console.log('Got Focus:' + this.editField.name);

    const editEvent = new UI.EditEvent();
    editEvent.type = UI.EventType.Enter;
    editEvent.name = this.editField.name;
    this.fieldEvent.emit(editEvent);
    // this.childEditField.nativeElement.focus();

    this.editingStyle = {
      'display': 'block',
      'width': this.width + 'px',
      'height': this.height + 'px'
    };
  }

  lostFocus() {
    console.log('Lost Focus:' + this.editField.name);
  }

  doneEditing(value: UI.EditEvent) {
    console.log('Done  editing:' + value);

    this.active = false;
    if (value.value !== this.editField.value) {
      this.editField.value = value.value;
      this.editField.state = DocumentBase.DisplayState.EditedValue;
      this.setStyle();
    }

    // Move focus to the next element
    //  this.divRef.nativeElement.nextSibling.focus();
  }

  setScale(scale: UI.Scale) {
    // this.left = this.editField.location.left * scale.horiz;
    // this.top = this.editField.location.top * scale.vertical;
    // this.width = this.editField.location.width * scale.horiz;
    // this.height = this.editField.location.height * scale.vertical;

    this.setStyle();

  }

  private setStyle() {
    switch (this.editField.state) {
      case DocumentBase.DisplayState.NoValue:
        this.locationStyle = {
          'position': 'absolute',
          'left': this.left + 'px',
          'top': this.top + 'px',
          'width': this.width + 'px',
          'height': this.height + 'px',
          'background-color': 'lightpink'
        };
        break;

      case DocumentBase.DisplayState.EditedValue:
        this.locationStyle = {
          'position': 'absolute',
          'left': this.left + 'px',
          'top': this.top + 'px',
          'width': this.width + 'px',
          'height': this.height + 'px',
          'background-color': 'lightgreen'
        };
        break;

      case DocumentBase.DisplayState.SavedValue:
        this.locationStyle = {
          'position': 'absolute',
          'left': this.left + 'px',
          'top': this.top + 'px',
          'width': this.width + 'px',
          'height': this.height + 'px',
          'background-color': 'lightgrey',
          'display': 'none'
          // background: 'rgba(255, 255, 255, 0.5)'
        };
        break;
    }
  }
}
