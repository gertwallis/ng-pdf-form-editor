import { Component, OnInit, Input } from '@angular/core';

import { Edit } from './../../model/Edit';

@Component({
  selector: 'edit-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() documentModel: Edit.Document;

  constructor() {
  }

  ngOnInit() {
  }
}
