import { Component, OnInit, Input } from '@angular/core';

import { Form } from './../../model/Form';

@Component({
  selector: 'form-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() document: Form.Document;

  constructor() {
  }

  ngOnInit() {
  }
}
