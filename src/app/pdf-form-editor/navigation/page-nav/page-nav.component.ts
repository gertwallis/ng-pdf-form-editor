import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-nav',
  templateUrl: './page-nav.component.html',
  styleUrls: ['./page-nav.component.css']
})
export class PdfFormPageNavComponent implements OnInit {

  @Input()  noOfPages = 0;

  pages: number[];

  constructor() {
  }

  ngOnInit() {
    this.pages = Array.from({length: this.noOfPages}, (v, k) => k + 1);
  }

}
