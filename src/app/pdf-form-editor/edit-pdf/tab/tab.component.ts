import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

   @Input() pageNo: number;
   @Input() active = false;

  constructor() { }

  ngOnInit() {
  }
}
