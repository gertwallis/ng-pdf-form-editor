import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { DocumentService } from './services/document.service';

import { PDF } from './model/PDF';
import { Edit } from './pdf-form-editor/model/Edit';
import { UI } from './pdf-form-editor/model/UI';
import { Params } from '@angular/router/src/shared';

@Component({
  template: `
  <h2>document</h2>
  <!--div *ngIf="document$ | async as documentModel"-->
  <div>
    <h3>"{{ documentModel }}"</h3>
    <div>
    </div>
  </div>
  <edit-form [documentModel]="documentModel">  ></edit-form>

  `,
})
export class SingleDocumentComponent implements OnInit {

  document$: Observable<Edit.Document>;

  documentModel: Edit.Document;
  // documentId: string;

  constructor(
    private DocumentService: DocumentService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  // constructor(
  //   private route: ActivatedRoute,
  //   private router: Router,
  //   private service: HeroService
  // ) {}

  ngOnInit() {
    console.log('Hallo gert');
    let documentId = this.route.snapshot.paramMap.get('id');
    console.log(documentId);
    this.loadDocument(documentId);

    // this.document$ =
    //  this.route.paramMap
    //    .switchMap((params: ParamMap) =>
    //      this.DocumentService.loadDocument(params.get('id'))
    //      // params.get('id')
    //     );
  }
  public loadDocument(documentId: string) {
    if (documentId) {
      this.DocumentService.loadDocument(documentId)
        .subscribe(doc => this.setDocument(doc));
    }
  }
  setDocument(document: Edit.Document) {
    // document.pages[0].active = true;
    this.documentModel = document;
  }
}