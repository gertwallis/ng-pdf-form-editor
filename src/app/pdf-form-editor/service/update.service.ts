import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { PDF } from './../model/Pdf';
import { UI } from './../model/UI';


@Injectable()
export class PdfService {

  constructor(private http: Http, url: string) {
  }

  update(id: string, name: string, value: string) {

  }
}


