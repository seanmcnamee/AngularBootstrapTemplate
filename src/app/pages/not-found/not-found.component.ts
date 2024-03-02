import { ILayoutDataService } from '@/services/layout-data/layout-data.service.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
    standalone: true
})
export class NotFoundComponent implements OnInit, OnDestroy {

  constructor(private layoutDataService: ILayoutDataService) { }

  ngOnInit(): void {
    this.layoutDataService.SetLayoutData({
      header: {
        title: "404 Not Found",
        isNavbarShowing: true
      },
      footer: {},
    })
  }
  ngOnDestroy(): void {
    this.layoutDataService.ClearLayoutData();
  }
}