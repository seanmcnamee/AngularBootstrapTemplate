import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from '@/layout/footer/footer.component';
import { HeaderComponent } from '@/layout/header/header.component';
import { ILayoutDataService } from '@/services/layout-data/layout-data.service.interface';
import { LayoutDataService } from '@/services/layout-data/layout-data.service';
import { BannerComponent } from '@/layout/header/banner/banner.component';
import { NavbarComponent } from '@/layout/header/navbar/navbar.component';
import { ErrorAlertsComponent } from '@/components/error-alerts/error-alerts.component';
import { IErrorAlertsService } from '@/services/error-alerts/error-alerts.service.interface';
import { ErrorAlertsService } from '@/services/error-alerts/error-alerts.service';
import { RouterTestingModule } from '@angular/router/testing';
import { IGlobalDataService } from './services/global-data/global-data.service.interface';
import { GlobalDataService } from './services/global-data/global-data.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        RouterTestingModule,
        FooterComponent,
        HeaderComponent, BannerComponent, NavbarComponent, ErrorAlertsComponent,
        AppComponent
    ],
    providers: [
        { provide: ILayoutDataService, useClass: LayoutDataService },
        { provide: IErrorAlertsService, useClass: ErrorAlertsService },
        { provide: IGlobalDataService, useClass: GlobalDataService },
    ],
}).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularBootstrapTemplate'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularBootstrapTemplate');
  });
});
