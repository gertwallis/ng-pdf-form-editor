import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

   @Input() pageNo: number;
   @Input() active = false;

  constructor() { }

  ngOnInit() {
  }


    // public ngAfterContentInit(): void {
    //   // if (this.PageNo === 1) {
    //   //   this.active = true;
    //   // }
    // }
}
