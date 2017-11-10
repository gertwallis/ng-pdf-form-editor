import { Component, OnInit, Input } from '@angular/core';

import { Model } from './../../model/PdfForm';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() Form: Model.Form;

  constructor() {
  }

  ngOnInit() {
  }

}
