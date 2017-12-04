import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'edit-tab',
  templateUrl: './tab.component.html',
})
export class TabComponent implements OnInit {

  @Input() pageNo: number;
  @Input() active = false;
  @Input() disabled = false;

  constructor() { }

  ngOnInit() {
  }
}
