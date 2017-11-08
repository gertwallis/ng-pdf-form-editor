import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfFormNavigationComponent } from './pdf-form-navigation.component';
import { PdfFormTabsComponent } from './pdf-form-tabs/pdf-form-tabs.component';
import { PdfFormTabComponent } from './pdf-form-tab/pdf-form-tab.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PdfFormTabsComponent, PdfFormTabComponent, PdfFormNavigationComponent]
//   declarations: [PdfFormNavigationModule]
})
export class PdfFormNavigationModule { }
