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


  goToPage (pageNo) {
    this.currentPage = pageNo;

    // deactivate all tabs
    this.tabs.forEach(tab => {
      tab.active = false;
    })

    const navTab = this.tabs.find(page => page.pageNo === pageNo);

    if (navTab){
      navTab.active = true;
    }

    this.navigationService.gotoPage(pageNo);

  }

  ngOnInit() {

  }

  public ngAfterContentInit(): void {

    const tabsArray = this.tabs.toArray();
    for (let i = 0; i < tabsArray.length; i++) {
      tabsArray[i].pageNo = i + 1;
    }

    this.goToPage(1);
  }
}
