import {
    AfterContentInit,
    Component,
    forwardRef,
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
export class PageComponent implements OnInit, AfterContentInit {

  @Input() active = false;
  @Input() page: Model.Page;
  @Input() data: Model.FormData;

  @ViewChildren(FieldComponent) fieldView: QueryList<FieldComponent>;
  //@ContentChildren(forwardRef(() => FieldComponent)) gertsChildren: QueryList<FieldComponent>;

  pageSize: {};

  constructor() {
  }

  ngOnInit() {
  }

  test() {
    console.log('HERE');
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

  public ngAfterContentInit(): void {
    // TODO: This will be determined by the rendered size of the pdf
    // this.page.pageSize.height = 1100;
    // this.page.pageSize.width = 680;
    // this.pageSize = {
    //   'position': 'absolute',
    //   'width': this.page.pageSize.width + 'px',
    //   'height': this.page.pageSize.height + 'px'
    // };
    this.pageSize = {
      // 'position': 'relative',
      // 'width': '650px',
      // 'height': '1100px',
      // 'border': '1px solid #ddd'
      // 'max-width': '250px'
    };
  }
}
