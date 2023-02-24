import { FooterData, ILayoutDataService, LayoutData } from '@/services/layout-data/layout-data.service.interface';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  private layoutDataSubscription: Subscription | undefined;
  footerData: FooterData | undefined;

  constructor(private layoutDataService: ILayoutDataService) { 
    this.footerData = undefined;
  }

  ngOnInit() {
    this.layoutDataSubscription = this.layoutDataService.GetLayoutDataSubject()
    .subscribe((navbarData: LayoutData) => {
      this.footerData = navbarData.footer;
    })
  }

  ngOnDestroy() {
    this.layoutDataSubscription?.unsubscribe();
  }
}
