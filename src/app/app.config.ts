import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app-routing.module";
import { ErrorAlertsService } from '@/services/error-alerts/error-alerts.service';
import { IErrorAlertsService } from '@/services/error-alerts/error-alerts.service.interface';
import { IGlobalDataService } from "./services/global-data/global-data.service.interface";
import { GlobalDataService } from "./services/global-data/global-data.service";
import { LayoutDataService } from '@/services/layout-data/layout-data.service';
import { ILayoutDataService } from '@/services/layout-data/layout-data.service.interface';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: IErrorAlertsService, useClass: ErrorAlertsService },
    { provide: IGlobalDataService, useClass: GlobalDataService },
    { provide: ILayoutDataService, useClass: LayoutDataService },
  ]
};
