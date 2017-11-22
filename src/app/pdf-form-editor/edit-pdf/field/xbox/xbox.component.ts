import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import { UI } from 'app/pdf-form-editor/model/UI';

import { DocumentBase } from './../../../model/DocumentBase';

@Component({
  selector: 'edit-xbox',
  templateUrl: './xbox.component.html',
  styleUrls: ['./xbox.component.css']
})
export class EditXBoxComponent {

  @Input() name: string;
  @Input() value: string;
  @Input() title: string;
  @Input() width: number;
  @Input() height: number;
  @Input() tabIndex: number;

  @ViewChild('inputHtml') childEditField: ElementRef;

  constructor() { }

  focus() {
    // Have to wait 200ms to allow angular construct to finish before
    // the focus will activate.
    setTimeout(() => {
      this.childEditField.nativeElement.focus();
    }, 200);
  }
}
