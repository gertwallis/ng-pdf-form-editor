import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfFormNavigationComponent } from './pdf-form-navigation.component';
import { PdfFormPageTabsComponent } from './pagetabs/pdf-form-pagetabs.component';
import { PdfFormPageTabComponent } from './pagetab/pdf-form-pagetab.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PdfFormPageTabsComponent, PdfFormPageTabComponent, PdfFormNavigationComponent]
//    declarations: [PdfFormNavigationModule]
})
export class PdfFormNavigationModule { }
