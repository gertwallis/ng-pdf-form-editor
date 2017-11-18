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

  @ViewChildren(FieldComponent) fieldView: QueryList<FieldComponent>;

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
}
