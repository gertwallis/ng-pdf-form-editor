import { TextComponent } from './text/text.component';
import { Component, Input, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { DocumentBase } from './../../model/DocumentBase';
import { Form } from './../../model/Form';
import { UI } from 'app/pdf-form-editor/model/UI';

@Component({
  selector: 'form-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() active: boolean;
  @Input() formField: Form.Field;
  
  @Output() fieldActive = new EventEmitter<string>();

  color: string;

  tabIndex = 0;

  private x = 0;
  private y = 0;
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
    console.log('Got Focus:' + this.formField.name);

    this.fieldActive.emit(this.formField.name);
    // this.childEditField.nativeElement.focus();

    this.editingStyle = {
      'display': 'block',
      'width': this.width + 'px',
      'height': this.height + 'px'
    };
  }

  lostFocus() {
    console.log('Lost Focus:' + this.formField.name);
  }

  doneEditing(value: UI.EditValue) {
    console.log('Done  editing:' + value);

    this.active = false;
    // this.editingStyle = {
    //   'display': 'none',
    // };

    if (value.value !== this.formField.value) {
      this.formField.value = value.value;
      this.formField.state = DocumentBase.DisplayState.EditedValue;
      this.setStyle();
    }

    // Move focus to the next element
   //  this.divRef.nativeElement.nextSibling.focus();
  }


  setLocation(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.setStyle();
  }

  private setStyle() {
    switch (this.formField.state) {
      case DocumentBase.DisplayState.NoValue:
        this.locationStyle = {
          'position': 'absolute',
          'left': this.x + 'px',
          'top': this.y + 'px',
          'width': this.width + 'px',
          'height': this.height + 'px',
          'background-color': 'lightpink'
        };
        break;

      case DocumentBase.DisplayState.EditedValue:
        this.locationStyle = {
          'position': 'absolute',
          'left': this.x + 'px',
          'top': this.y + 'px',
          'width': this.width + 'px',
          'height': this.height + 'px',
          'background-color': 'lightgreen'
        };
        break;

      case DocumentBase.DisplayState.SavedValue:
        this.locationStyle = {
          'position': 'absolute',
          'left': this.x + 'px',
          'top': this.y + 'px',
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
