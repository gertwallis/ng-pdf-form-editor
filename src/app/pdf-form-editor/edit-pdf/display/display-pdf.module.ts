import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { DisplayPdfComponent } from './display-pdf.component';

@NgModule({
    'imports': [ BrowserModule, PdfViewerModule],
    'exports': [ DisplayPdfComponent ],
    'declarations': [ DisplayPdfComponent ]
})
export class PDFDisplayModule { }
