import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UpdateService {

  constructor(private http: Http, url: string) {
  }

  update(id: string, name: string, value: string) {

  }
}


