import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PdfFormEditorComponent } from './pdf-form-editor/pdf-form-editor.component';
import { PdfFormNavigationComponent } from './pdf-form-editor/pdf-form-navigation/pdf-form-navigation.component';
import { PdfFormTabsComponent } from './pdf-form-editor/pdf-form-navigation/pdf-form-tabs/pdf-form-tabs.component';
import { PdfFormTabComponent } from './pdf-form-editor/pdf-form-navigation/pdf-form-tab/pdf-form-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    PdfFormEditorComponent,
    PdfFormNavigationComponent,
    PdfFormTabsComponent,
    PdfFormTabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
