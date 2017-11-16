import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

import { FieldComponent } from '../field/field.component';

import { Model } from './../../model/PdfForm';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @Input() active = false;
  @Input() page: Model.Page;
  @Input() data: Model.FormData;

  @ViewChildren(FieldComponent) fieldView: QueryList<FieldComponent>;

  pageSize: {};

  constructor() {
  }

  ngOnInit() {
  }

  getData(name): Model.FieldData {
    const field = this.data.fields.filter(x => x.name === name);

    // Expecting to find only one but if more - return first.
    if (field.length > 0) {
      return field[0];
    }

    // Returning an empty object - the use case is generally to display the data field.
    // for a location. Bad data but returning an undefined will trow an error in the UI
    // based on bad data. Should probably do avalidation check for good data. but don't want
    // UI have to check for bad data.
    return new Model.FieldData();
  }

  setPageSize(width: number, height: number) {
    this.pageSize = {
      'width': width + 'px',
      'height': height + 'px',
    };
  }
}
