import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { PdfService } from './service/pdf.service';

// Directives
import { FieldStyleDirective } from './directives/form-fieldstyle.directive';
import { PositionDirective } from './directives/form-position.directive';
import { SizeDirective } from './directives/form-size.directive';

// Main Component
import { PdfEditComponent } from './edit-pdf.component';

// Page Navigation
import { NavigationComponent } from './edit-pdf/navigation/navigation.component';
import { TabComponent } from './edit-pdf/tab/tab.component';

// Editing
import { EditPagesComponent } from './edit-pdf/pages/pages.component';
import { EditPageComponent } from './edit-pdf/page/page.component';
import { EditGroupComponent } from './edit-pdf/group/group.component';
import { EditFieldComponent } from './edit-pdf/field/field.component';
import { EditTextComponent } from './edit-pdf/field/text/text.component';

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
    EditPageComponent,
    EditPagesComponent,
    TabComponent,
    PdfEditComponent,
    EditGroupComponent,
    EditFieldComponent,
    EditTextComponent,
    DisplayPdfComponent,
    FieldStyleDirective,
    PositionDirective,
    SizeDirective
  ]
})
export class PdfEditModule { }
