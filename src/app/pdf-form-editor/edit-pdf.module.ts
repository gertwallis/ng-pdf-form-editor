import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';

// Services
import { PdfService } from './service/pdf.service';
import { FieldChangeService } from './service/field-changed.service';
import { PageNavigationService } from './service/page-navigation.service';

// Directives
import { FieldStyleDirective } from './directives/form-fieldstyle.directive';
import { PositionDirective } from './directives/form-position.directive';
import { PageSizeDirective } from './directives/form-size.directive';

// Main Component
import { PdfEditComponent } from './edit-pdf.component';

// Page Navigation
import { NavigationComponent } from './edit-pdf/navigation/navigation.component';
import { NavTabComponent } from './edit-pdf/navigation/tab/tab.component';
import {NavTabListComponent} from './edit-pdf/navigation/tab-list/tab-list.component';
// Editing
import { EditPagesComponent } from './edit-pdf/pages/pages.component';
import { EditPageComponent } from './edit-pdf/page/page.component';
import { EditGroupComponent } from './edit-pdf/group/group.component';
import { EditFieldComponent } from './edit-pdf/field/field.component';
import { EditTextComponent } from './edit-pdf/field/text/text.component';
import { EditTextAreaComponent } from './edit-pdf/field/text-area/text-area.component';
import { EditXBoxComponent } from './edit-pdf/field/xbox/xbox.component'

// Display of PDF
import { DisplayPdfComponent } from './edit-pdf/display/display-pdf.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    PdfViewerModule,
  ],
  providers: [
    PdfService,
    FieldChangeService,
    PageNavigationService
  ],
  exports: [
    PdfEditComponent
  ],
  declarations: [
    NavigationComponent,
    NavTabComponent,
    NavTabListComponent,
    EditPageComponent,
    EditPagesComponent,
    PdfEditComponent,
    EditGroupComponent,
    EditFieldComponent,
    EditTextComponent,
    EditTextAreaComponent,
    EditXBoxComponent,
    DisplayPdfComponent,
    FieldStyleDirective,
    PositionDirective,
    PageSizeDirective
  ]
})
export class PdfEditModule { }
