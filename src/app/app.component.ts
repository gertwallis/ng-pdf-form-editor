import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, SimpleChanges, OnInit } from '@angular/core';
// import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { DocumentService } from './services/document.service';

import { PDF } from './model/PDF';
import { Edit } from './pdf-form-editor/model/Edit';
import { UI } from './pdf-form-editor/model/UI';

@Component({
  selector: 'pdf-form',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pdf EDITOR!';

  documentList: PDF.DocumentList;
  documentModel: Edit.Document;
  documentId: string;

  constructor(private DocumentService: DocumentService) { }

  setDocument(document: Edit.Document) {
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

  setFieldValue(changedField: UI.FieldEdited) {

    // Do something with edited values
    console.log('Updated Field: ' + changedField.name + ' = ' + changedField.value);
  }

  ngOnInit() {
    this.DocumentService.getDocumentList('SampleDocuments')
      .subscribe(docList =>
        this.setDocumentList(docList));
  }
}
