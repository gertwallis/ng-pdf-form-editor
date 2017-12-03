import { PageSizeDirective } from '../../directives/form-size.directive';
import { Component, Input, OnDestroy, OnInit, QueryList, ViewChildren, AfterContentInit } from '@angular/core';
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
export class EditPageComponent implements OnInit, AfterContentInit, OnDestroy {

  @Input() active: boolean;
  @Input() editPage: Edit.Page;

  public tabOrder: number[] = [];
  
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
    let index = this.tabOrder.indexOf(tabIndex);

    switch (direction) {
      case UI.Direction.Forward:
        index++;
        if (index >= this.tabOrder.length) {
          index = 0;
        }
        break;
      case UI.Direction.BackWard:
        index--;
        if (index < 0) {
          index = this.tabOrder.length - 1;
        }
        break;
      case UI.Direction.Current:
        // return the same one (clicked on).
        break;
    }

    return this.tabOrder[index];

  }

  setScale(size: UI.Size, scale: UI.Scale) {
    this.pageSize = {
      'width': size.width + 'px',
      'height': size.height + 'px',
    };

    this.groupViews.forEach(group => {
      group.setScale(scale);
    });
  }

  setTabOrder() {
    this.tabOrder = [];

    for (const group of this.editPage.groups) {
      for (const field of group.fields) {
      this.tabOrder.push(field.location.tabOrder);
    }
  }

    // Need a sorted list of tab order numbers to determine next / previous tab
    this.tabOrder = this.tabOrder.sort(this.compare);
}

  compare(a: number, b: number) {
    if (a < b) {
        return -1;
    }

    if (a > b) {
        return 1;
    }

    return 0;
  }

  ngOnInit() {
    // this.loaderService.show();

  }

  ngOnDestroy() {
    this.fieldSubscription.unsubscribe();
  }

    public ngAfterContentInit(): void {
      this.setTabOrder();
    }
}
