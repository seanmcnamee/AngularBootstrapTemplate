import { FooterData, ILayoutDataService, LayoutData } from '@/services/layout-data/layout-data.service.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true
})
export class FooterComponent implements OnInit, OnDestroy {
  private _layoutDataSubscription: Subscription | undefined;
  footerData: FooterData | undefined = undefined;

  constructor(private _layoutDataService: ILayoutDataService) { }

  ngOnInit() {
    this._layoutDataSubscription = this._layoutDataService.GetLayoutDataSubject()
    .subscribe((navbarData: LayoutData) => {
      this.footerData = navbarData.footer;
    })
  }

  ngOnDestroy() {
    this._layoutDataSubscription?.unsubscribe();
  }
}
