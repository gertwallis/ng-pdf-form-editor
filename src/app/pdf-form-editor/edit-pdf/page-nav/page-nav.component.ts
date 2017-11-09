import { Component, OnInit, Input } from '@angular/core';

import { Model } from './../../model/PdfForm';

@Component({
  selector: 'page-nav',
  templateUrl: './page-nav.component.html',
  styleUrls: ['./page-nav.component.css']
})
export class PdfFormPageNavComponent implements OnInit {

  @Input() Form: Model.Form;

  constructor() {
  }

  ngOnInit() {
  }

}
