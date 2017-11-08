import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { PdfFormEditorComponent } from './pdf-form-editor/pdf-form-editor.component';
import { PdfFormNavigationComponent } from './pdf-form-editor/navigation/pdf-form-navigation.component';
import { PdfFormPageTabsComponent } from './pdf-form-editor/navigation/pagetabs/pdf-form-pagetabs.component';
import { PdfFormPageTabComponent } from './pdf-form-editor/navigation/pagetab/pdf-form-pagetab.component';


@NgModule({
  declarations: [
    AppComponent,
    PdfFormEditorComponent,
    PdfFormNavigationComponent,
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
