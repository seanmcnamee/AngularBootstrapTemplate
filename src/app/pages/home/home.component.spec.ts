import { ErrorAlertsService } from '@/services/error-alerts/error-alerts.service';
import { IErrorAlertsService } from '@/services/error-alerts/error-alerts.service.interface';
import { LayoutDataService } from '@/services/layout-data/layout-data.service';
import { ILayoutDataService } from '@/services/layout-data/layout-data.service.interface';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        FormsModule,
        HomeComponent,
    ],
    providers: [
        { provide: ILayoutDataService, useClass: LayoutDataService },
        { provide: IErrorAlertsService, useClass: ErrorAlertsService },
    ]
})
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
