import { AfterContentInit, Component, ContentChild, ContentChildren, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core/src/linker/element_ref';

import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

import { PageNavigationService } from './../../service/page-navigation.service';

// import { NavTabListComponent } from './tab-list/tab-list.component';

import { Edit } from './../../model/Edit';
import { UI } from 'app/pdf-form-editor/model/UI';

@Component({
  selector: 'edit-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, AfterContentInit {

  @Input() preferences: UI.Preferences;
  @Input() editDocument: Edit.Document;
  @Input() noOfPages: number;

  // @ViewChild('tabList') tabList: NavTabListComponent;

  @ViewChild('tabSet') tabSet: NgbTabset;

  private lock: boolean;
  private shade: boolean;

  private zoom: number;
  private pageNos: number[] = [];
  private currentPage: number;

  constructor(private navigationService: PageNavigationService) {
  }

  ngOnInit() {
  }

  movePage(direction: boolean) {

    // Forwarded
    let newPageNo = this.currentPage;
    if (direction) {
      newPageNo++;
      if (newPageNo > this.noOfPages) {
        newPageNo = 1;
      }
    } else {
      newPageNo--;
      if (newPageNo === 0) {
        newPageNo = this.noOfPages;
      }
    }

    this.goToPage(newPageNo);
  }

  goToPage(pageNo: number) {
    console.log('NAV GO TO PAGE' + pageNo)
    this.currentPage = pageNo;
    this.navigationService.gotoPage(pageNo);

  }

  toggleLock() {
    this.lock = !this.lock;
    this.navigationService.lock(this.lock);
  }

  toggleShade() {
    this.shade = !this.shade;
    this.navigationService.lock(this.shade);
  }

  incrementZoom(direction: boolean) {
    if (direction) {
      this.zoom += this.preferences.zoomIncrement;
    } else {
      this.zoom -= this.preferences.zoomIncrement;
    }

    this.navigationService.zoomIn(this.zoom);
  }

  resetZoom() {
    this.navigationService.zoomIn(this.preferences.defaultZoom);
  }

  public ngAfterContentInit(): void {
    this.zoom = this.preferences.defaultZoom;

    for (let i = 1; i <= this.noOfPages; i++) {
      this.pageNos.push(i);
    }
  }

  /// TESTING
  beforeChange($event) {
    console.log('BEFORECHANGE');
    this.goToPage($event.nextId);
    // this.tabSet.select($event.nextId);
  }
}
