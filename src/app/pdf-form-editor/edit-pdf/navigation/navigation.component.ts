import { AfterContentInit, Component, ContentChild, ContentChildren, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core/src/linker/element_ref';

import { PageNavigationService } from './../../service/page-navigation.service';

import { NavTabListComponent } from './tab-list/tab-list.component';

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

  @ViewChild('tabList') tabList: NavTabListComponent;


  private lock: boolean;
  private shade: boolean;
  // private currentPage: number;
  private zoom: number;
  private pageNos: number[] = [];

  constructor(private navigationService: PageNavigationService) {
  }

  ngOnInit() {
  }

  movePage(direction: boolean) {
    // console.log('NEXTPAGE' + direction + ' ' + this.currentPage);
    // Forwared
    if (direction) {
      this.tabList.currentPage++;
      if (this.tabList.currentPage > this.noOfPages) {
        this.tabList.currentPage = 1;
      }
    } else {
      this.tabList.currentPage--;
      if (this.tabList.currentPage === 0) {
        this.tabList.currentPage = this.noOfPages;
      }
    }

    this.navigationService.gotoPage(this.tabList.currentPage);
  }

  toggleLock() {
    this.lock = !this.lock;
    this.navigationService.lock(this.lock);
  }

  toggleShade() {
    console.log('TOGGLESHADE');
    this.shade = !this.shade;
    this.navigationService.lock(this.shade);
  }

  incrementZoom(direction: boolean) {
    if (direction) {
      this.zoom += this.preferences.zoomIncrement;
    } else {
      this.zoom -= this.preferences.zoomIncrement;
    }

    console.log('INCREMENTZOOM: ' + this.zoom);
    this.navigationService.zoomIn(this.zoom);
  }

  resetZoom() {
    this.navigationService.zoomIn(this.preferences.defaultZoom);
  }


  // setPage(pageNo) {
  //   console.log('SETPAGE' + pageNo);
  //   this.currentPage = pageNo;
  //   this.navigationService.gotoPage(pageNo);
  // }

  public ngAfterContentInit(): void {
    this.zoom = this.preferences.defaultZoom;

    // this.pageNos = Array.apply(null, {length: this.noOfPages}).map(Number.call, Number)
    for (let i = 1; i <= this.noOfPages; i++) {
      this.pageNos.push(i);
    }

  }
}
