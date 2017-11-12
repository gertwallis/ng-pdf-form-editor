import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

import { Model } from './../../../model/PdfForm';

@Component({
  selector: 'text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit, AfterContentInit {

  @Input() name: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }


  public ngAfterContentInit(): void {
   // console.log("TEXT:" + this.name);
  }
}
