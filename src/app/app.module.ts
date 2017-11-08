import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { PdfFormPageTabComponent } from './pdf-form-editor/navigation/page-tab/page-tab.component';
import { PdfFormPageTabsComponent } from './pdf-form-editor/navigation/page-tabs/page-tabs.component';
import { PdfFormPageNavComponent } from './pdf-form-editor/navigation/page-nav/page-nav.component';
import { PdfFormEditorComponent } from './pdf-form-editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfFormEditorComponent,
    PdfFormPageNavComponent,
    PdfFormPageTabsComponent,
    PdfFormPageTabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
