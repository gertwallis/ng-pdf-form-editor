import { PdfService } from './service/pdf.service';
import { Component, Input, OnInit } from '@angular/core';

import { NavigationComponent } from './edit-pdf/navigation/navigation.component';

import { DocumentBase } from './model/DocumentBase';
import { PDF } from './model/PDF';
import { Form } from './model/Form';

@Component({
  selector: 'edit-pdf',
  templateUrl: './edit-pdf.component.html',
  styleUrls: ['./edit-pdf.component.css']
})
export class PdfEditComponent implements OnInit {

  // @Input() private pdfForm: PdfForm;
  private document: Form.Document;

  setDocument(pdfDocument: PDF.Document) {

    // Copy the PDF document into the Form document.
    const formDocument = new Form.Document();
    formDocument.description = pdfDocument.description;
    formDocument.id = pdfDocument.id;
    formDocument.pdfBytes = pdfDocument.pdfBytes;
    formDocument.title = pdfDocument.title;
    formDocument.url = pdfDocument.url;
    formDocument.pageSize = pdfDocument.pageSize;

    for (const pdfPage of pdfDocument.pages) {
      const formPage = new Form.Page();

      formPage.pageNo = pdfPage.pageNo;
      formPage.active = (pdfPage.pageNo === 1);

      for (const pdfLocation of pdfPage.locations) {
        const formData = this.getFieldData(pdfDocument.data, pdfLocation.name);

        // Only inlude non hidden fields.
        if (formData.state !== DocumentBase.DisplayState.Hidden) {
          formData.multipleLocations = pdfPage.locations.filter(x => x.name === pdfLocation.name).length > 1;
          formData.location = new DocumentBase.Location();
          formData.location.height = pdfLocation.height;
          formData.location.tabOrder = pdfLocation.tabOrder;
          formData.location.width = pdfLocation.width;
          formData.location.x = pdfLocation.x;
          formData.location.y = pdfLocation.y;
          formPage.data.push(formData);
        }
      }

      formDocument.pages.push(formPage);
    }

    this.document = formDocument;
  }

  getFieldData(pdfData: DocumentBase.Data[], dataFieldName: string): Form.Data {
    const fields = pdfData.filter(x => x.name === dataFieldName);
    const formData = new Form.Data();
    formData.name = dataFieldName;
    // Expecting to find only one but if more - return first.
    if (fields.length > 0) {
      formData.description = fields[0].description;
      formData.format = fields[0].format;
      formData.label = fields[0].label;
      formData.maxChar = fields[0].maxChar;
      formData.name = fields[0].name;
      formData.state = fields[0].state;
      formData.value = fields[0].value;
    }

    // Returning an empty object - the use case is generally to display the data field.
    // for a location. Bad data but returning an undefined will trow an error in the UI
    // based on bad data. Should probably do avalidation check for good data. but don't want
    // UI have to check for bad data.
    return formData;
  }

  constructor(private pdfService: PdfService) { }

  ngOnInit() {
    // 018BAV2  247ORV2 247WIV2 251NVV2 252ORV2
    this.pdfService.loadDocument('247ORV2')
      .subscribe(doc =>
        this.setDocument(doc));
  }
}
