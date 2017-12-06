import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { PdfViewerModule } from './../pdf-viewer/pdf-viewer.module';

import { DisplayPdfComponent } from './display-pdf.component';

@NgModule({
    'imports': [ BrowserModule, PdfViewerModule],
    'exports': [ DisplayPdfComponent ],
    'declarations': [ DisplayPdfComponent ]
})
export class PDFDisplayModule { }
