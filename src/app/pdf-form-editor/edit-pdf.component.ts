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
        // Some pages may not have fields. 
        if (pdfDocument.fields) {
          const formField = this.getFieldData(pdfDocument.fields, pdfLocation.name);

          // Only inlude non hidden fields.
          if (formField.state !== DocumentBase.DisplayState.Hidden) {
            formField.multipleLocations = pdfPage.locations.filter(x => x.name === pdfLocation.name).length > 1;
            formField.location = new DocumentBase.Location();
            formField.location.height = pdfLocation.height;
            formField.location.tabOrder = pdfLocation.tabOrder;
            formField.location.width = pdfLocation.width;
            formField.location.x = pdfLocation.x;
            formField.location.y = pdfLocation.y;

            // Set the data value if it exist in the pdf
            if (pdfDocument.data) {
              const dataValues = pdfDocument.data.filter(x => x.name === pdfLocation.name);

              if (dataValues.length > 0) {
                formField.value = dataValues[0].value;
                formField.state = DocumentBase.DisplayState.SavedValue;
              }
            }
            
            formPage.fields.push(formField);
          }
        }
      }

      formDocument.pages.push(formPage);
    }

    this.document = formDocument;
  }

  getFieldData(pdfData: DocumentBase.Field[], dataFieldName: string): Form.Field {
    const fields = pdfData.filter(x => x.name === dataFieldName);
    const formField = new Form.Field();
    formField.name = dataFieldName;
    // Expecting to find only one but if more - return first.
    if (fields.length > 0) {
      formField.description = fields[0].description;
      formField.format = fields[0].format;
      formField.label = fields[0].label;
      formField.maxChar = fields[0].maxChar;
      formField.name = fields[0].name;
      formField.state = fields[0].state;
    }

    // Returning an empty object - the use case is generally to display the data field.
    // for a location. Bad data but returning an undefined will trow an error in the UI
    // based on bad data. Should probably do avalidation check for good data. but don't want
    // UI have to check for bad data.
    return formField;
  }

  constructor(private pdfService: PdfService) { }

  ngOnInit() {
    // 018BAV2  247ORV2 247WIV2 251NVV2 252ORV2 252MDV2
    this.pdfService.loadDocument('252MDV2')
      .subscribe(doc =>
        this.setDocument(doc));
  }
}
