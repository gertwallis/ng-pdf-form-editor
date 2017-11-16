import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
import { TextComponent } from './edit-pdf/field/text/text.component';
import { FieldComponent } from './edit-pdf/field/field.component';

// Display of PDF
import { DisplayPdfComponent } from './edit-pdf/display/display-pdf.component';


@NgModule({
  imports: [
    FormsModule,
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
    FieldComponent,
    TextComponent,
    DisplayPdfComponent
  ]
})
export class PdfEditModule { }
