import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


import { PdfEditModule } from './pdf-form-editor/edit-pdf.module';
import { PdfEditComponent } from './pdf-form-editor/edit-pdf.component';
import { MessagesComponent } from './messages/messages.component';

import { MessageService } from './pdf-form-editor/service/message.service';
import { PdfService } from './pdf-form-editor/service/pdf.service';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PdfEditModule
  ],
  providers: [PdfService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
