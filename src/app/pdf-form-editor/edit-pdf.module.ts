import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { PdfService } from './service/pdf.service';

// Main Component
import { PdfEditComponent } from './edit-pdf.component';

// Page Navigation
import { NavigationComponent } from './edit-pdf/navigation/navigation.component';
import { PagesComponent } from './edit-pdf/pages/pages.component';
import { TabComponent } from './edit-pdf/tab/tab.component';

// Editing
import { PageComponent } from './edit-pdf/page/page.component';
// import { PdfFormEditPagesComponent } from './edit-pdf/pages/pages.component';
// import { PdfFormEditFieldTextComponent } from './edit-pdf/field/text/text.component';
// import { PdfFormEditFieldComponent } from './edit-pdf/field/field.component';
// import { PdfFormEditTabComponent } from './edit-pdf/page/page.component';

// Display of PDF
import { DisplayPdfComponent } from './edit-pdf/display/display-pdf.component';


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
    NavigationComponent,
    PageComponent,
    PagesComponent,
    TabComponent,
    PdfEditComponent,
    DisplayPdfComponent
  ]
})
export class PdfEditModule { }
