import { ErrorAlertsService } from '@/services/error-alerts/error-alerts.service';
import { IErrorAlertsService } from '@/services/error-alerts/error-alerts.service.interface';
import { LayoutDataService } from '@/services/layout-data/layout-data.service';
import { ILayoutDataService } from '@/services/layout-data/layout-data.service.interface';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from '@/layout/header/header.component';
import { BannerComponent } from '@/layout/header/banner/banner.component';
import { NavbarComponent } from '@/layout/header/navbar/navbar.component';
import { ErrorAlertsComponent } from '@/components/error-alerts/error-alerts.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    providers: [
        { provide: IErrorAlertsService, useClass: ErrorAlertsService },
        { provide: ILayoutDataService, useClass: LayoutDataService },
    ],
    imports: [RouterTestingModule, HeaderComponent, BannerComponent, NavbarComponent, ErrorAlertsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
