import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'edit-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class NavTabComponent implements OnInit {
  @Input() pageNo: number;
  @Input() active = false;
  
  constructor() { }

  ngOnInit() {
  }
}
