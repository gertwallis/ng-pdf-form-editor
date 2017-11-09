import { PdfForm } from './model/PdfForm';
import { PdfService } from '../service/pdf.service';
import { Component, Input, OnInit } from '@angular/core';

import { PdfFormPageNavComponent } from './edit-pdf/page-nav/page-nav.component';
import { DisplayPdfComponent } from './display-pdf/display-pdf.component';

@Component({
  selector: 'edit-pdf',
  templateUrl: './edit-pdf.component.html',
  styleUrls: ['./edit-pdf.component.css']
})
export class PdfEditComponent implements OnInit {

  // @Input() private pdfForm: PdfForm;
  private pdfForm: PdfForm  = {
    shown: true,
    url: '/assets/247OR.pdf',
    pdfBytes: '',
    noOfPages: 8
  };

  constructor(/*private pdfService: PdfService*/) { }

  ngOnInit() {
    // this.load();
  }

  // load(): PdfForm {
  //   pdfService.load();
  // }
}
