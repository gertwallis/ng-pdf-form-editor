import { AfterContentInit, Component, Input, OnInit, ContentChildren, QueryList } from '@angular/core';

import { PageNavigationService } from './../../../service/page-navigation.service';

import { NavTabComponent } from '../tab/tab.component';

@Component({
  selector: 'edit-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.css']
})
export class NavTabListComponent implements OnInit, AfterContentInit {

  @ContentChildren(NavTabComponent) tabs: QueryList<NavTabComponent>;

  public currentPage;

  constructor(private navigationService: PageNavigationService) { }


  selectPage(newPage: NavTabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(page => page.active = false);

    // activate the tab the user has clicked on.
    newPage.active = true;

    this.gotoPage(newPage.pageNo);
  }

  gotoPage (pageNo) {
    this.currentPage = pageNo;
    this.navigationService.gotoPage(pageNo);

  }

  ngOnInit() {

  }

  public ngAfterContentInit(): void {

    const tabsArray = this.tabs.toArray();
    for (let i = 0; i < tabsArray.length; i++) {
      tabsArray[i].pageNo = i + 1;
    }

    this.selectPage(this.tabs.first);
  }
}
