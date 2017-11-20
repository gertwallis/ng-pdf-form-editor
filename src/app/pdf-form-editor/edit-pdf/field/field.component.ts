import { EditTextComponent } from './text/text.component';
import { Component, Input, OnInit, ViewChild, Output, EventEmitter, ElementRef, AfterContentInit } from '@angular/core';

import { DocumentBase } from './../../model/DocumentBase';
import { Edit } from './../../model/Edit';
import { UI } from 'app/pdf-form-editor/model/UI';

@Component({
  selector: 'edit-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class EditFieldComponent implements OnInit, AfterContentInit {

  @Input() active = false;
  @Input() editField: Edit.Field;

  @Output() bubbleLeaving = new EventEmitter<UI.LeaveFieldEvent>();
  @Output() bubbleEdit = new EventEmitter<UI.EditValueEvent>();

  @ViewChild(EditTextComponent) editTextView: EditTextComponent;

  color: string;
  valueChanged = false;
  // value updated by text edit.
  editValue: string;
  rememberedValue: string;

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
    // this.editingStyle = {
    //   'display': 'none',
    // };
  }

  setScale(scale: UI.Scale) {
    this.left = this.editField.location.left * scale.horiz;
    this.top = this.editField.location.top * scale.vertical;
    this.width = this.editField.location.width * scale.horiz;
    this.height = this.editField.location.height * scale.vertical;

    this.setStyle();

  }

  private setStyle() {

    this.locationStyle = {
      'position': 'absolute',
      'left': this.left + 'px',
      'top': this.top + 'px',
      'width': this.width + 'px',
      'height': this.height + 'px',
      'border': '1px solid green'
    };
    // this.editingStyle = {
    // };
  }
  /*
    lostFocus() {
      console.log('Lost Focus:' + this.editField.name);
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

    // Move focus to the next element
    //  this.divRef.nativeElement.nextSibling.focus();
    */


  activate() {
    // console.log('FIELD:  Focus' + this.editField.name);
    // this.active = true;
    // this.tabIndex = -1;
    // this.editTextView.childEditField.nativeElement.tabIndex = this.editField.location.tabOrder;
    
    // Pass the focus to the edit field
    // this.editTextView.childEditField.nativeElement.focus();

    // const editEvent = new UI.EditEvent();
    // editEvent.type = UI.EventType.Enter;
    // editEvent.name = this.editField.name;
    // this.fieldEvent.emit(editEvent);
    // // this.childEditField.nativeElement.focus();

    // this.editingStyle = {
    //   'display': 'block',
    //   'width': this.width + 'px',
    //   'height': this.height + 'px'
    // };
  }

  blurField() {
    console.log('FIELD blur');
 }

  catchLeaving(leaveValue: UI.LeaveFieldEvent) {
    console.log('FIELD: catch leaving:' + leaveValue.direction.toString());
    this.active = false;
    // this.tabIndex = this.editField.location.tabOrder;
    // this.editTextView.childEditField.nativeElement.tabIndex = 0;

    this.bubbleLeaving.emit(leaveValue);
  }

  catchEdit(editValue: UI.EditValueEvent) {
    /*
    console.log('FIELD: editValue' + editValue.value);
    console.log('FIELD: current ' + this.rememberedValue);
    if (editValue.value !== this.rememberedValue) {
      console.log('FIELD: CHANGED');
      this.rememberedValue = editValue.value;
      // Changed again -- bubble up to higher level.
      this.bubbleEdit.emit(editValue);
    }

    if (editValue.value !== this.editField.value) {
      this.valueChanged = true;
    }
    */
  }

  
  
  public ngAfterContentInit(): void {
    this.editValue = this.editField.value;
    this.tabIndex = this.editField.location.tabOrder;
  }

  keyPressHandler(keyCode: KeyboardEvent) {
    console.log('FIELD: Key ' + keyCode.key);
    if (keyCode.keyCode === 9) {
      
      let nextField = this.findNextTabStop(this.divRef.nativeElement);

      if (nextField) {
        keyCode.preventDefault();
        keyCode.stopPropagation();
        this.active = false;
        nextField.focus();
      }
      //this.active = true;

    } 
   }

  findNextTabStop(el) {
    let universe = document.querySelectorAll('edit-field');
    const test = this.tabIndex + 1;
    const list = Array.prototype.filter.call(universe, function(item) 
    {
      if (item.childElementCount == 1 && item.childNodes[0].tabIndex === test) {
        return true;
      }
    });

    if (list.length == 1) {
      return list[0];
    }

    return undefined;
  }

}
