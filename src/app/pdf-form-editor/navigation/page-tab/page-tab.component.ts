import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pdf-form-pagetab',
  templateUrl: './page-tab.component.html',
  styleUrls: ['./page-tab.component.css']
})
export class PdfFormPageTabComponent implements OnInit {

  @Input('pageNo') pageNo: number;
  @Input() active = false;

  constructor() { }

  ngOnInit() {
  }

}
