import { HeaderData, ILayoutDataService, LayoutData } from '@/services/layout-data/layout-data.service.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ErrorAlertsComponent } from '../../components/error-alerts/error-alerts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgIf } from '@angular/common';
import { BannerComponent } from './banner/banner.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [BannerComponent, NgIf, NavbarComponent, ErrorAlertsComponent]
})
export class HeaderComponent implements OnInit, OnDestroy {
  private layoutDataSubscription: Subscription | undefined;
  headerData: HeaderData | undefined;

  constructor(private layoutDataService: ILayoutDataService) { 
    this.headerData = undefined;
  }

  ngOnInit() {
    this.layoutDataSubscription = this.layoutDataService.GetLayoutDataSubject()
    .subscribe((navbarData: LayoutData) => {
      this.headerData = navbarData.header;
    })
  }

  ngOnDestroy() {
    this.layoutDataSubscription?.unsubscribe();
  }
}
