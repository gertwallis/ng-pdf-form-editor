import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { PdfService } from './pdf-load.service';
import { Component, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { PDF } from './pdf-form-editor/model/PDF';

import { Edit } from './pdf-form-editor/model/Edit';

@Component({
  selector: 'pdf-form',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pdf EDITOR!';

  documentList: PDF.DocumentList ;
  documentModel: Edit.Document;
  documentId: string;

  constructor(private pdfService: PdfService) { }

  setDocument(document: Edit.Document) {
    this.documentModel = document;
  }

  setDocumentList(documentList: PDF.DocumentList) {
    this.documentList = documentList;
  }

   public loadDocument(documentId: string) {
    if (documentId) {
      this.pdfService.loadDocument(documentId)
        .subscribe(doc => this.setDocument(doc));
    }
  }

  selectchange($event) {
    this.loadDocument($event.target.value);
  }

  ngOnInit() {
    this.pdfService.getDocumentList('SampleDocuments')
      .subscribe(docList =>
        this.setDocumentList(docList));
  }
}

// https://github.com/cornflourblue/angular2-communicating-between-components/blob/master/app/app.component.ts
// https://blog.cloudboost.io/build-simple-shopping-cart-with-angular-4-observables-subject-subscription-part-2-2d3735cde5f
