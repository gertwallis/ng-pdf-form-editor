import { Component, Input, OnInit } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

import { NavigationComponent } from './edit-pdf/navigation/navigation.component';

import { UpdateService } from './service/update.service';

// Models
import { Base } from './model/Base';
import { Edit } from './model/Edit';

@Component({
  selector: 'edit-form',
  templateUrl: './edit-pdf.component.html',
  styleUrls: ['./edit-pdf.component.css']
})
export class PdfEditComponent {

  @Input() documentModel: Edit.Document;

  setTabOrder(): any {
    // Calculate the tab order of the fields based of where the groups tab sequence
    // are in the overall tab order.
    // Example:
    // address1 and address 2 are horizontally next to each other
    // 1:??     2:??
    // 3: Street1    4: ??     5: Street2
    // 6: City1      7: ??     8: City2
    // 9: Zip1                 10:Zip
    // 11: Phone1              11: Phone2
    // 13: ??   14:??
    //
    // The tab groups would be as follow:
    //    root 1 2 4 7 13 14
    //    addres1: 3 6 9 11
    //    addres2: 5 8 10 12
    // To fill in the addresses sequentially desired tab order would be:
    //    1 2 [3 6 9 11] 4 7  [5 8 10 12] 13 14

    const groupTabOrder = [];
    let rootTabOrder: number[];
/*
    for (const page of this.documentModel.pages) {
      
      for (const group of page.groups) {
        group.initialize();

        if (group.name === 'root') {
          rootTabOrder = group.getTabOrder();
        } else {
          groupTabOrder.push(group.getTabOrder());
        }
      }

      page.tabs = [];

      if (groupTabOrder) {
        // Sort the arrays based on the tab order of the first tab order.
        groupTabOrder.sort(this.compareArray);
      }

      if (rootTabOrder) {
        for (const groupOrder of groupTabOrder) {
          if (rootTabOrder.length > 0) {
            if (rootTabOrder[rootTabOrder.length - 1] < groupOrder[0]) {
              // all of the root calues greater than the first group element
              page.tabs = page.tabs.concat(rootTabOrder);
              rootTabOrder = [];
            } else {
              for (const rootOrder of rootTabOrder) {
                if (rootOrder > groupOrder[0]) {
                  const index = rootTabOrder.indexOf(rootOrder);
                  page.tabs = page.tabs.concat(rootTabOrder.splice(0, index));
                  break;
                }
              }
            }
          }

          page.tabs = page.tabs.concat(groupOrder);
        }

        page.tabs = page.tabs.concat(rootTabOrder);
      } else {
        for (const tabOrder of groupTabOrder) {
          page.tabs = page.tabs.concat(tabOrder);
        }
      }
    }
    */
  }

  // Sort an array based on the first value of the array. 
  compareArray(a: number[], b: number[]) {
    if (a[0] < b[0]) {
      return -1;
    }

    if (a[0] > b[0]) {
      return 1;
    }

    return 0;
  }

  //  setDocument(pdfDocument: PDF.Document) {

  // Copy the PDF document into the Form document.
  /*
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
          formField.location = new Base.Location();
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
            }
          }

          formPage.addField(formField);
        }
      }
    }

    formDocument.addPage(formPage);
  }

  this.documentModel = formDocument;
  */
  //  }

  // getFieldData(pdfData: PDF.Field[], dataFieldName: string): Edit.Field {
  //   const fields = pdfData.filter(x => x.name === dataFieldName);

  //   // Expecting to find only one but if more - return first.
  //   if (fields.length > 0 && !fields[0].hidden) {
  //     const formField = new Edit.Field();
  //     formField.description = fields[0].description;
  //     formField.format = fields[0].format;
  //     formField.label = fields[0].label;
  //     formField.maxChar = fields[0].maxChar;
  //     formField.name = fields[0].name;
  //     formField.required = fields[0].required;

  //     return formField;
  //   }

  //   return undefined;
  // }

  constructor() { }
}
