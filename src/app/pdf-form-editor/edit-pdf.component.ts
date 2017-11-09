import { PdfService } from '../service/pdf.service';
import { Component, Input, OnInit } from '@angular/core';

import { PdfFormPageNavComponent } from './edit-pdf/page-nav/page-nav.component';
import { DisplayPdfComponent } from './display-pdf/display-pdf.component';

import { Model } from './model/PdfForm';

@Component({
  selector: 'edit-pdf',
  templateUrl: './edit-pdf.component.html',
  styleUrls: ['./edit-pdf.component.css']
})
export class PdfEditComponent implements OnInit {

  // @Input() private pdfForm: PdfForm;
  private Form: Model.Form;

  constructor(/*private pdfService: PdfService*/) { }

  ngOnInit() {
    this.Form = this.load();
  }

  load(): Model.Form {
    //   pdfService.load();
    const newForm  = new Model.Form();

    newForm.Shown = true;
    newForm.Url = '/assets/247WI.pdf';
    newForm.Pages = [];
    for (let i = 1; i <= 4; i++) {
      let page = new Model.Page();
      page.PageNo = i;
      newForm.Pages.push(page);
    }

    return newForm;
  }
}
