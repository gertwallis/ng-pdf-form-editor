import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { MessageService } from './message.service';

import 'rxjs/Rx';

import { PDF } from './../model/Pdf';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PdfService {

  private pdfUrl = '/assets/';

  constructor(private http: Http, private messageService: MessageService) {
  }

  loadDocument(documentId: string): Observable<PDF.Document> {

    this.messageService.add('PdfService: Fetching ' + documentId);
    return this.http.get(this.pdfUrl + documentId + ".json")
      .map((response: Response) => <PDF.Document>response.json())
      .do(data =>
        this.messageService.add('PdfService: Completed ' + documentId)
      // console.log(JSON.stringify(data))
      );
  }

  getDocumentList(listName: string): Observable<PDF.DocumentList> {
    
        this.messageService.add('PdfService: Fetching ' + listName);
        return this.http.get(this.pdfUrl + listName + ".json")
          .map((response: Response) => <PDF.DocumentList>response.json())
          .do(data =>
            this.messageService.add('PdfService: Completed ' + listName)
          // console.log(JSON.stringify(data))
          );
      }
    
  update(name: string, value: string) {

  }
}


