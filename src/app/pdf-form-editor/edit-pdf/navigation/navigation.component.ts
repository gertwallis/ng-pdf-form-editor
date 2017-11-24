import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

import { PageNavigationService } from './../../service/page-navigation.service';

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

  private lock: boolean;
  private shade: boolean;
  private currentPage: number;
  private zoom: number;

  constructor(private navigationService:  PageNavigationService) {
  }

  ngOnInit() {
  }

  movePage(direction: boolean) {
    console.log('NEXTPAGE' + direction);
    // Forwared
    if (direction) {
      this.currentPage++;
      if (this.currentPage > this.editDocument.noOfPages) {
        this.currentPage = 1;
      }
    } else {
      this.currentPage--;
      if (this.currentPage === 0) {
        this.currentPage = this.editDocument.noOfPages;
      }
    }

    this.navigationService.gotoPage(this.currentPage);
  }

  toggleLock() {
    this.lock = !this.lock;
    this.navigationService.lock(this.lock);
  }

  toggleShade() {
    console.log('TOGGLESHADE');
    this.shade = ! this.shade;
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

  setPage(pageNo) {
    console.log('SETPAGE' + pageNo);
    this.currentPage = pageNo;
    this.navigationService.gotoPage(pageNo);
  }

  public ngAfterContentInit(): void {
    this.zoom = this.preferences.defaultZoom;
  }
}
