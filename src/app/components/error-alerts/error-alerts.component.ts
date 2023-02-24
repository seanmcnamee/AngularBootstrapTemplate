import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ErrorAlertItem, IErrorAlertsService } from '@/services/error-alerts/error-alerts.service.interface';

@Component({
  selector: 'app-error-alerts',
  templateUrl: './error-alerts.component.html',
  styleUrls: ['./error-alerts.component.scss']
})
export class ErrorAlertsComponent implements OnInit, OnDestroy {
  errorAlerts: ErrorAlertItem[] = [];
  private subscription: Subscription | undefined;

  constructor(private _errorAlertsService: IErrorAlertsService) { }

  ngOnInit(): void {
    this.subscription = this._errorAlertsService.GetErrorAlertItemsSubject().subscribe(
    newErrorAlerts => {
      this.errorAlerts = newErrorAlerts
    }
  );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public onDismissal(item: ErrorAlertItem) {
    this._errorAlertsService.RemoveErrorAndBroadcast(item);
  }
}