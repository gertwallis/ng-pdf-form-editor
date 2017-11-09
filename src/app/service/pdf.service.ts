import { Injectable } from '@angular/core';

 import { PdfForm } from './../models/interfaces'

@Injectable()
export class PdfService {

  // const test: PdfEdit.Form = {URL = 'gert', };
   //xxx:  PdfModel.Form  = { };
  constructor() { }

  loadPdf(): PdfForm  {
    // return localStorage.getItem("something");
    const pdfForm: PdfForm = {
      shown: true,
      url: '/assets/247OR.pdf',
      pdfBytes: ''
    }

    return pdfForm;
  }

}
