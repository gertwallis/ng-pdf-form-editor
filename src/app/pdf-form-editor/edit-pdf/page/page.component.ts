import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';

import { FieldComponent } from '../field/field.component';

import { Form } from './../../model/Form';

@Component({
  selector: 'form-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @Input() formPage: Form.Page;

  @ViewChildren(FieldComponent) fieldViews: QueryList<FieldComponent>;

  pageSize: {};

  constructor() {
  }

  ngOnInit() {
  }

  setPageSize(width: number, height: number) {
    this.pageSize = {
      'width': width + 'px',
      'height': height + 'px',
    };
  }

  // Emmitor functions
  fieldActive(fieldName: string) {
    const activeFields = this.fieldViews.filter(field => field.active);
    // field.active = true;
  
    for (const activeField of activeFields) {
      activeField.active = false;
      console.log('Deactivated field:' + activeField.formField.name);
    }

    const currentField = this.fieldViews.filter(field => field.formField.name === fieldName);

    if (currentField.length > 0) {
      // TODO: This will only work if the field name is unique. If ther is multiple fields.
      //       with the same name, it may fail. 
      currentField[0].active = true;
      console.log('Activated field:' + currentField[0].formField.name);
    }

  }
}
