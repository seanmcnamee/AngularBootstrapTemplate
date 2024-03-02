import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LayoutDataService } from '@/services/layout-data/layout-data.service';
import { ILayoutDataService } from '@/services/layout-data/layout-data.service.interface';
import { ErrorAlertsService } from '@/services/error-alerts/error-alerts.service';
import { IErrorAlertsService } from '@/services/error-alerts/error-alerts.service.interface';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(FormsModule, BrowserModule, AppRoutingModule),
        { provide: IErrorAlertsService, useClass: ErrorAlertsService },
        { provide: ILayoutDataService, useClass: LayoutDataService }
    ]
})
  .catch(err => console.error(err));
