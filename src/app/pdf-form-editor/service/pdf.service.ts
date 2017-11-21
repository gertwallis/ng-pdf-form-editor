import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { PDF } from './../model/Pdf';
import { UI } from './../model/UI';


@Injectable()
export class PdfService {

  private pdfUrl = '/assets/';

  constructor(private http: Http, private messageService: MessageService) {
  }

  loadDocument(documentId: string): Observable<PDF.Document> {

    this.messageService.add(UI.MessageLevel.info, 'Loading ' + documentId);
    return this.http.get(this.pdfUrl + documentId + '.json')
      .map((response: Response) => <PDF.Document>response.json())
      .do(data =>
        this.messageService.add(UI.MessageLevel.success, 'Completed ' + documentId)
      // console.log(JSON.stringify(data))
      );
  }

  getDocumentList(listName: string): Observable<PDF.DocumentList> {

    this.messageService.add(UI.MessageLevel.info, 'Loading document list: ' + listName);
    return this.http.get(this.pdfUrl + listName + '.json')
      .map((response: Response) => <PDF.DocumentList>response.json())
      .do(data =>
        this.messageService.add(UI.MessageLevel.success, 'Completed ' + listName)
      // console.log(JSON.stringify(data))
      );
  }

  update(name: string, value: string) {

  }
}


