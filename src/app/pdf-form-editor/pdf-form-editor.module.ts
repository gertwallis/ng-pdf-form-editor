import { PdfFormNavigationComponent } from './pdf-form-navigation/pdf-form-navigation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfFormNavigationModule } from './pdf-form-navigation/pdf-form-navigation.module';

@NgModule({
  imports: [
    CommonModule,
    PdfFormNavigationComponent
  ],
  declarations: [ PdfFormNavigationComponent]
})
export class PdfFormEditorModule { }
