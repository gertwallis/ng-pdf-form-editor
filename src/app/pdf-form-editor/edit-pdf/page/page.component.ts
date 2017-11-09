import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PdfFormPageComponent implements OnInit {

   @Input() PageLabel: number;
   @Input() active = false;

  constructor() { }

  ngOnInit() {
  }

}
