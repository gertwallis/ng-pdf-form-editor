import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfFormNavigationModule } from './navigation/navigation.module';
import { PdfFormViewerComponent } from './viewer/viewer.component';
import { PdfFormPageNavComponent } from './navigation/page-nav/page-nav.component';
import { PdfFormEditPagesComponent } from './edit/pages/pages.component';
import { PdfFormEditPageComponent } from './edit/page/page.component';
import { PdfFormEditFieldComponent } from './edit/field/field.component';
// import { PdfFormEditTextComponent } from './edit/field/text/text.component';
import { PdfFormEditFieldTextComponent } from './edit/field/text/text.component';

@NgModule({
  imports: [
    CommonModule,
    PdfFormPageNavComponent
  ],
  declarations: [
    PdfFormPageNavComponent,
    PdfFormViewerComponent,
    PdfFormEditPageComponent,
    PdfFormEditFieldComponent,
    PdfFormEditPagesComponent,
    PdfFormEditFieldTextComponent]
})
export class PdfFormEditorModule { }
