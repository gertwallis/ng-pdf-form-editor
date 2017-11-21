import { Component, Input, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { FieldMovementService } from 'app/pdf-form-editor/service/field-movement.service';

import { EditGroupComponent } from './../group/group.component';

// Models
import { Edit } from './../../model/Edit';
import { UI } from 'app/pdf-form-editor/model/UI';

@Component({
  selector: 'edit-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class EditPageComponent implements OnInit, OnDestroy {
 
  @Input() active: boolean;
  @Input() editPage: Edit.Page;

  @ViewChildren(EditGroupComponent) groupViews: QueryList<EditGroupComponent>;

  fieldSubscription: Subscription;
  
  pageSize: {};

  constructor(private moveService: FieldMovementService) {
  }

  ngOnInit() {
    // this.loaderService.show();
    this.fieldSubscription = this.moveService.FieldState
        .subscribe((state: UI.LeaveField) => {
           // this.products = state.products;
            console.log('Field move event !!!!!!');
        });

}
ngOnDestroy() {
    this.fieldSubscription.unsubscribe();
}
  setScale(width: number, height: number, scale: UI.Scale) {
    this.pageSize = {
      'width': width + 'px',
      'height': height + 'px',
    };

    this.groupViews.forEach(group => {
      group.setScale(scale);
    });
  }

}
