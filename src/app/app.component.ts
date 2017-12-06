import { Component, OnInit } from '@angular/core';
import { DocumentService } from './services/document.service';

import { PDF } from './model/PDF';
import { Edit } from './pdf-form-editor/model/Edit';
import { UI } from './pdf-form-editor/model/UI';

@Component({
  selector: 'pdf-form',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Pdf EDITOR!';

  documentList: PDF.DocumentList;
  documentModel: Edit.Document;
  documentId: string;

  constructor(private DocumentService: DocumentService) { }

  setDocument(document: Edit.Document) {
    // document.pages[0].active = true;
    this.documentModel = document;
  }

  setDocumentList(documentList: PDF.DocumentList) {
    this.documentList = documentList;
  }

  public loadDocument(documentId: string) {
    if (documentId) {
      this.DocumentService.loadDocument(documentId)
        .subscribe(doc => this.setDocument(doc));
    }
  }

  selectchange($event) {
    this.loadDocument($event.target.value);
  }

  setFieldValue(changedField: UI.FieldChanged) {
    // Notify the service field is changed
    this.DocumentService.update(changedField.documentId, changedField.name, changedField.value);    
  }

  ngOnInit() {
    this.DocumentService.getDocumentList('SampleDocuments')
      .subscribe(docList =>
        this.setDocumentList(docList));
  }
}
