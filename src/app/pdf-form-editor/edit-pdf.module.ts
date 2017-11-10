import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { PdfService } from '../service/pdf.service';

// Main Component
import { PdfEditComponent } from './edit-pdf.component';

// Page Navigation
import { PdfFormPageNavComponent } from './edit-pdf/page-nav/page-nav.component';
import { PdfFormPagesComponent } from './edit-pdf/pages/pages.component';
import { PdfFormPageComponent } from './edit-pdf/page/page.component';

// Editing
// import { PdfFormEditPagesComponent } from './edit-pdf/pages/pages.component';
// import { PdfFormEditFieldTextComponent } from './edit-pdf/field/text/text.component';
// import { PdfFormEditFieldComponent } from './edit-pdf/field/field.component';
// import { PdfFormEditPageComponent } from './edit-pdf/page/page.component';

// Display of PDF 
import { DisplayPdfComponent } from './display-pdf/display-pdf.component';


@NgModule({
  imports: [
    CommonModule,
    PdfViewerModule,
  ],
  providers: [
    PdfService
  ],
  exports: [
    PdfEditComponent
  ],
  declarations: [
    PdfFormPageNavComponent,
    PdfFormPagesComponent,
    PdfFormPageComponent,
    PdfEditComponent,
    DisplayPdfComponent
  ]
})
export class PdfEditModule { }