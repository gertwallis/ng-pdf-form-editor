import { PdfService } from './service/pdf.service';
import { Component, Input, OnInit } from '@angular/core';

import { PdfFormPageNavComponent } from './edit-pdf/page-nav/page-nav.component';

import { Model } from './model/PdfForm';

@Component({
  selector: 'edit-pdf',
  templateUrl: './edit-pdf.component.html',
  styleUrls: ['./edit-pdf.component.css']
})
export class PdfEditComponent implements OnInit {

  // @Input() private pdfForm: PdfForm;
  private Form: Model.Form;

  constructor(private pdfService: PdfService) { }

  ngOnInit() {
    this.Form = this.pdfService.loadPdf();
  }

}
