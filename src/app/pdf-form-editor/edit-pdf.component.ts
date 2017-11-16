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
  private document: Model.Document;
  private test: Model.Document;

  setDocument(newDocument: Model.Document) {
    this.document = newDocument;
  }

  constructor(private pdfService: PdfService) { }

  ngOnInit() {
    // 018BAV2 251NVV2  247ORV2 247WI 247WIV2 251NVV2 252ORV2
    this.pdfService.loadDocument('018BAV2')
      .subscribe(doc =>
        this.setDocument(doc));

    // this.document = this.pdfService.loadPdf();
  }

}
