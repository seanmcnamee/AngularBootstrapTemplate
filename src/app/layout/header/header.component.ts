import { HeaderData, ILayoutDataService, LayoutData } from '@/services/layout-data/layout-data.service.interface';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private layoutDataSubscription: Subscription | undefined;
  headerData: HeaderData | undefined;

  constructor(private layoutDataService: ILayoutDataService) { 
    this.headerData = undefined;
  }

  ngOnInit() {
    this.layoutDataSubscription = this.layoutDataService.GetLayoutDataSubject()
    .subscribe((navbarData: LayoutData) => {
      this.headerData = navbarData.header;
    })
  }

  ngOnDestroy() {
    this.layoutDataSubscription?.unsubscribe();
  }
}
