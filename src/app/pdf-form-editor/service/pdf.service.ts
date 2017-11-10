import { Injectable } from '@angular/core';

import { Model } from './../model/PdfForm';

@Injectable()
export class PdfService {

  constructor() { }

  loadPdf(): Model.Form {
    // return localStorage.getItem("something");
    // const pdfForm: PdfForm = {
    //   shown: true,
    //   url: '/assets/???.pdf',
    //   pdfBytes: '',
    // }
    // pdForm.pages.push()
    const newForm = new Model.Form();

    newForm.Shown = true;
    newForm.Url = '/assets/247WI.pdf';
    newForm.Pages = [];
    for (let i = 1; i <= 4; i++) {
      const page = new Model.Page();
      page.PageNo = i;
      newForm.Pages.push(page);
    }

    return newForm;
  }

}
