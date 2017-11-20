import { PdfService } from './service/pdf.service';
import { Component, Input, OnInit } from '@angular/core';

import { NavigationComponent } from './edit-pdf/navigation/navigation.component';

import { DocumentBase } from './model/DocumentBase';
import { PDF } from './model/PDF';
import { Edit } from './model/Edit';

@Component({
  selector: 'edit-form',
  templateUrl: './edit-pdf.component.html',
  styleUrls: ['./edit-pdf.component.css']
})
export class PdfEditComponent implements OnInit {

  @Input() documentId: string;

  private editDocument: Edit.Document;

  setDocument(pdfDocument: PDF.Document) {

    // Copy the PDF document into the Form document.
    const formDocument = new Edit.Document();
    formDocument.description = pdfDocument.description;
    formDocument.id = pdfDocument.id;
    formDocument.pdfBytes = pdfDocument.pdfBytes;
    formDocument.title = pdfDocument.title;
    formDocument.url = pdfDocument.url;
    formDocument.pageSize = pdfDocument.pageSize;

    for (const pdfPage of pdfDocument.pages) {
      const formPage = new Edit.Page();

      formPage.pageNo = pdfPage.pageNo;
      formPage.active = (pdfPage.pageNo === 1);

      for (const pdfLocation of pdfPage.locations) {
        // Some pages may not have fields.
        if (pdfDocument.fields) {
          const formField = this.getFieldData(pdfDocument.fields, pdfLocation.name);

          // Only inlude non hidden fields.
          if (formField) {
            formField.multipleLocations = pdfPage.locations.filter(x => x.name === pdfLocation.name).length > 1;
            formField.location = new DocumentBase.Location();
            formField.location.height = pdfLocation.height;
            formField.location.tabOrder = pdfLocation.tabOrder;
            formField.location.width = pdfLocation.width;
            formField.location.left = pdfLocation.left;
            formField.location.top = pdfLocation.top;
            formField.groupName = pdfLocation.groupName;

            // Set the data value if it exist in the pdf
            if (pdfDocument.data) {
              const dataValues = pdfDocument.data.filter(x => x.name === pdfLocation.name);

              if (dataValues.length > 0) {
                formField.value = dataValues[0].value;

                if (formField.value) {
                  formField.state = Edit.DisplayState.SavedValue;
                } else {
                  formField.state = Edit.DisplayState.NoValue;
                }
              }
            }

            formPage.addField(formField);
          }
        }
      }

      formDocument.addPage(formPage);
    }

    this.editDocument = formDocument;
  }

  getFieldData(pdfData: PDF.Field[], dataFieldName: string): Edit.Field {
    const fields = pdfData.filter(x => x.name === dataFieldName);

    if (fields[0].hidden) {
      console.log('Hidden field: ' + fields[0].name);
    }
    // Expecting to find only one but if more - return first.
    if (fields.length > 0 && !fields[0].hidden) {
      const formField = new Edit.Field();
      formField.description = fields[0].description;
      formField.format = fields[0].format;
      formField.label = fields[0].label;
      formField.maxChar = fields[0].maxChar;
      formField.name = fields[0].name;

      return formField;
    }

    return undefined;
  }

  constructor(private pdfService: PdfService) { }

  ngOnInit() {
    if (this.documentId) {
      this.pdfService.loadDocument(this.documentId)
        .subscribe(doc =>
          this.setDocument(doc));
    }
  }
}
