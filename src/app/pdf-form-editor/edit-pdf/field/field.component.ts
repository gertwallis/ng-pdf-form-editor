import { EditTextComponent } from './text/text.component';
import { Component, Input, OnInit, ViewChild, Output, EventEmitter, ElementRef, AfterContentInit } from '@angular/core';

// Service
import { FieldChangeService } from '../../service/field-changed.service';

// Models
import { DocumentBase } from './../../model/DocumentBase';
import { Edit } from './../../model/Edit';
import { UI } from 'app/pdf-form-editor/model/UI';

@Component({
  selector: 'edit-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class EditFieldComponent implements AfterContentInit {

  @Input() active = false;
  @Input() editField: Edit.Field;

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

  constructor(element: ElementRef, private moveService: FieldChangeService) {
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
    console.log('FIELD: Ativate ' + this.tabIndex + ' ' + this.editField.name);
    this.active = true;
   //  this.editTextView.active = true;
    
    this.editTextView.focus();
  }

  deActivate() {
    console.log('FIELD: De-ativate ' + this.tabIndex + ' ' + this.editField.name);
    this.active = false;
//    this.editTextView.active = false;
  }

  moveTo(){
    console.log('FIELD: MoveTo ' + this.tabIndex + ' ' + this.editField.name);
    this.moveField(UI.Direction.Current);
  }

  // blurField() {
  //   console.log('FIELD blur');
  // }

  public ngAfterContentInit(): void {
    this.editValue = this.editField.value;
    this.tabIndex = this.editField.location.tabOrder;
  }

  keyPressHandler(keyCode: KeyboardEvent) {
    if (keyCode.keyCode === 13 ||
      keyCode.keyCode === 9 ||
      (keyCode.which === 9 && keyCode.shiftKey)) {
      keyCode.preventDefault();
      keyCode.stopPropagation();
      if (keyCode.which === 9 && keyCode.shiftKey) {
        this.moveField(UI.Direction.BackWard);
      } else {
        this.moveField(UI.Direction.Forward)
      }
    }
  }

  moveField(direction: UI.Direction) {
    const field: UI.LeaveField = {
      direction: direction,
      name: this.editField.name,
      tabIndex: this.tabIndex
    };

    this.moveService.exitField(field);
  }}
