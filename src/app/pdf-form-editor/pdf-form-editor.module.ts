import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfFormNavigationModule } from './pdf-form-navigation/pdf-form-navigation.module';

@NgModule({
  imports: [
    CommonModule,
    PdfFormNavigationModule
  ],
  declarations: [PdfFormNavigationModule]
})
export class PdfFormEditorModule { }
