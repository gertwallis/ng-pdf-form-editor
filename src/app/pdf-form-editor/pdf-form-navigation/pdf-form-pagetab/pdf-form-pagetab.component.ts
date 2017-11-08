import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pdf-form-pagetab',
  templateUrl: './pdf-form-pagetab.component.html',
  styleUrls: ['./pdf-form-pagetab.component.css']
})
export class PdfFormPageTabComponent implements OnInit {

  @Input('title') title: string;
  @Input() active = false;

  constructor() { }

  ngOnInit() {
  }

}
