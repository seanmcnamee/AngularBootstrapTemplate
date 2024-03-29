import { ErrorAlertItem, IErrorAlertsService } from '@/services/error-alerts/error-alerts.service.interface';
import { ILayoutDataService } from '@/services/layout-data/layout-data.service.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [ FormsModule ]
})
export class HomeComponent implements OnInit, OnDestroy {
  private homeComponentErrorAlertsScope = "HomeComponent";
  errorText?: string
  autoDismissDelay?: number

  constructor(private layoutDataService: ILayoutDataService, private errorAlertsService: IErrorAlertsService) { }

  ngOnInit(): void {
    this.layoutDataService.SetLayoutData({
      header: {
        title: "Home",
        isNavbarShowing: true
      },
      footer: {},
    })
  }
  ngOnDestroy(): void {
    this.layoutDataService.ClearLayoutData();
  }

  addError() {
    this.errorAlertsService.AddErrorAndBroadcast(
      new ErrorAlertItem(this.errorText ?? "",
        this.homeComponentErrorAlertsScope, this.autoDismissDelay ?? 0)
    );
  }
}
