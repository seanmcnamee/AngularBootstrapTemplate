import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorAlertsComponent } from '@/components/error-alerts/error-alerts.component';
import { FooterComponent } from '@/layout/footer/footer.component';
import { HeaderComponent } from '@/layout/header/header.component';
import { NavbarComponent } from '@/layout/header/navbar/navbar.component';
import { BannerComponent } from '@/layout/header/banner/banner.component';
import { HomeComponent } from '@/pages/home/home.component';
import { NotFoundComponent } from '@/pages/not-found/not-found.component';
import { IErrorAlertsService } from '@/services/error-alerts/error-alerts.service.interface';
import { ErrorAlertsService } from '@/services/error-alerts/error-alerts.service';
import { ILayoutDataService } from '@/services/layout-data/layout-data.service.interface';
import { LayoutDataService } from '@/services/layout-data/layout-data.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ErrorAlertsComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: IErrorAlertsService, useClass: ErrorAlertsService},
    {provide: ILayoutDataService, useClass: LayoutDataService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
