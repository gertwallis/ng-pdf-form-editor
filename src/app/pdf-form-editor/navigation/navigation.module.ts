import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfFormPageNavComponent } from './page-nav/page-nav.component';
import { PdfFormPageTabsComponent } from './page-tabs/page-tabs.component';
import { PdfFormPageTabComponent } from './page-tab/page-tab.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PdfFormPageTabsComponent, PdfFormPageTabComponent, PdfFormPageNavComponent]
//    declarations: [PdfFormNavigationModule]
})
export class PdfFormNavigationModule { }
