import { PdfService } from './pdf-form-editor/service/pdf.service';
import { Component } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { PDF } from './pdf-form-editor/model/PDF';

@Component({
  selector: 'pdf-form',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pdf EDITOR!';

  documentList: PDF.DocumentList ;
  documentId: string;

  constructor(private pdfService: PdfService) { }

  setDocument(list: PDF.DocumentList) {
    this.documentList = list;
  }

  ngOnInit() {
    this.pdfService.getDocumentList('SampleDocuments')
      .subscribe(docList =>
        this.setDocument(docList));
  }
}
