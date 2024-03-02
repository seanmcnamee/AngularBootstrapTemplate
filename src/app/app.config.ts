import { ApplicationConfig } from "@angular/core";
import { LayoutDataService } from '@/services/layout-data/layout-data.service';
import { ILayoutDataService } from '@/services/layout-data/layout-data.service.interface';
import { ErrorAlertsService } from '@/services/error-alerts/error-alerts.service';
import { IErrorAlertsService } from '@/services/error-alerts/error-alerts.service.interface';
import { provideRouter } from "@angular/router";
import { routes } from "./app-routing.module";


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: IErrorAlertsService, useClass: ErrorAlertsService },
    { provide: ILayoutDataService, useClass: LayoutDataService }
  ]
};
