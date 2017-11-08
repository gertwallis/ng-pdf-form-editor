import { PdfFormNavigationComponent } from './navigation/pdf-form-navigation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfFormNavigationModule } from './navigation/pdf-form-navigation.module';
import { PdfFormViewerComponent } from './viewer/pdf-form-viewer/pdf-form-viewer.component';
import { PdfFormEditPageComponent } from './edit/pdf-form-edit-page/pdf-form-edit-page.component';
import { PdfFormEditElementComponent } from './edit/pdf-form-edit-element/pdf-form-edit-element.component';
import { PdfFormEditTextComponent } from './edit/pdf-form-edit-text/pdf-form-edit-text.component';
import { PdfFormEditPagesComponent } from './edit/pdf-form-edit-pages/pdf-form-edit-pages.component';
import { PdfFormTextFieldComponent } from './edit/pdf-form-text-field/pdf-form-text-field.component';

@NgModule({
  imports: [
    CommonModule,
    PdfFormNavigationComponent
  ],
  declarations: [ PdfFormNavigationComponent, PdfFormViewerComponent, PdfFormEditPageComponent, PdfFormEditElementComponent, PdfFormEditTextComponent, PdfFormEditPagesComponent, PdfFormTextFieldComponent]
})
export class PdfFormEditorModule { }
