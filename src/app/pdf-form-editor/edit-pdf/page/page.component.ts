import { PageSizeDirective } from '../../directives/form-size.directive';
import { Component, Input, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { FieldChangeService } from './../../service/field-changed.service';

import { EditGroupComponent } from './../group/group.component';

// Models
import { Edit } from './../../model/Edit';
import { UI } from './../../model/UI';

@Component({
  selector: 'edit-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class EditPageComponent implements OnInit, OnDestroy {

  @Input() active: boolean;
  @Input() editPage: Edit.Page;

  @ViewChildren(EditGroupComponent) groupViews: QueryList<EditGroupComponent>;

  fieldSubscription: Subscription;

  size: UI.Size;
  currentTabIndex = -1;

  pageSize: {};

  constructor(private moveService: FieldChangeService) {
    this.fieldSubscription = this.moveService.FieldState
      .subscribe((state: UI.LeaveField) => {
        this.moveFromField(state);
      });
  }

  ngOnInit() {
    // this.loaderService.show();

  }

  ngOnDestroy() {
    this.fieldSubscription.unsubscribe();
  }

  moveFromField(field: UI.LeaveField) {
    if (field.tabIndex !== this.currentTabIndex) {
      const nextTabIndex = this.getNextTabIndex(field.tabIndex, field.direction);
      // console.log('PAGE: Move from [' + field.tabIndex + '] to [' + nextTabIndex + ']');
      this.groupViews.forEach(group => {
        group.fieldViews.forEach(field => {
          if (field.tabIndex === nextTabIndex) {
            // console.log('PAGE: Ativating ' + field.tabIndex + ' ' + field.editField.name);
            field.activate();
          } else {
            if (field.active) {
              // console.log('PAGE: Deactivating ' + field.tabIndex + ' ' + field.editField.name);
              field.deActivate();
            }
          }
        });
      });
    }
  }

  getNextTabIndex(tabIndex, direction: UI.Direction) {
    let index = this.editPage.tabs.indexOf(tabIndex);

    switch (direction) {
      case UI.Direction.Forward:
        index++;
        if (index >= this.editPage.tabs.length) {
          index = 0;
        }
        break;
      case UI.Direction.BackWard:
        index--;
        if (index < 0) {
          index = this.editPage.tabs.length - 1;
        }
        break;
      case UI.Direction.Current:
        // return the same one (clicked on).
        break;
    }

    return this.editPage.tabs[index];

  }
  setScale(size: UI.Size, scale: UI.Scale) {

    // this.size = size;

    this.pageSize = {
      'width': size.width + 'px',
      'height': size.height + 'px',
    };

    this.groupViews.forEach(group => {
      group.setScale(scale);
    });
  }
}
