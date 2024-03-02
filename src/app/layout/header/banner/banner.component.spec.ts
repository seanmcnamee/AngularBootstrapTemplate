import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { BannerComponent } from './banner.component';
import { IGlobalDataService } from '@/services/global-data/global-data.service.interface';
import { GlobalDataService } from '@/services/global-data/global-data.service';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RouterTestingModule, BannerComponent],
    providers: [
      { provide: IGlobalDataService, useClass: GlobalDataService },
  ]
})
    .compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
