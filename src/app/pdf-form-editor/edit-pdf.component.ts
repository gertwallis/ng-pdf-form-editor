import { PdfService } from './service/pdf.service';
import { Component, Input, OnInit } from '@angular/core';

import { NavigationComponent } from './edit-pdf/navigation/navigation.component';

import { Model } from './model/PdfForm';

@Component({
  selector: 'edit-pdf',
  templateUrl: './edit-pdf.component.html',
  styleUrls: ['./edit-pdf.component.css']
})
export class PdfEditComponent implements OnInit {

  // @Input() private pdfForm: PdfForm;
  private form: Model.Form;

  constructor(private pdfService: PdfService) { }

  ngOnInit() {
    const pdfDocument = this.pdfService.loadPdf();
    this.form = pdfDocument.form;
  }

}
