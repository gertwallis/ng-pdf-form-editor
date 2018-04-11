import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SingleDocumentComponent } from './single-document.component';

import { PdfEditModule } from './pdf-form-editor/edit-pdf.module';
import { PdfEditComponent } from './pdf-form-editor/edit-pdf.component';
import { MessagesComponent } from './messages/messages.component';

import { MessageService } from './services/message.service';
import { DocumentService } from './services/document.service';

import { DocumentRoutingModule } from './document-routing.module';

// const appRoutes: Routes = [
//   { path: 'doc/:id', component: SingleDocumentComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    SingleDocumentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PdfEditModule,
    DocumentRoutingModule
    // RouterModule.forRoot(
    //   appRoutes,
    //   {
    //     enableTracing: true, // <-- debugging purposes only
    // //    preloadingStrategy: SelectivePreloadingStrategy,

    //   }
    // )

  ],
  
  providers: [DocumentService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
