import { AfterContentInit, Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';

import { FieldComponent } from '../field/field.component';

import { Model } from './../../model/PdfForm';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, AfterContentInit {

  @Input() active = false;
  @Input() formPage: Model.FormPage;

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

    public ngAfterContentInit(): void {
      console.log("PAGE CHILDREN" + this.formPage);
    }
}
