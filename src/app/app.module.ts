import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


import { PdfEditModule } from './pdf-form-editor/edit-pdf.module';
import { PdfEditComponent } from './pdf-form-editor/edit-pdf.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PdfEditModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
