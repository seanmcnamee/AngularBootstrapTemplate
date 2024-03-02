import { GlobalData, IGlobalDataService } from '@/services/global-data/global-data.service.interface';
import { NgIf, TitleCasePipe } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: true,
  imports: [NgIf, RouterLink, TitleCasePipe]
})
export class BannerComponent implements OnInit, OnDestroy {
  @Input() title?: string;
  @Input() subTitle?: string;

  private _globalDataSubscription: Subscription | undefined;
  globalData: GlobalData | undefined = undefined;

  constructor(private _globalDataService: IGlobalDataService) { }

  ngOnInit() {
    this._globalDataSubscription = this._globalDataService.GetGlobalDataSubject()
      .subscribe((globalData: GlobalData) => this.globalData = globalData);
  }

  ngOnDestroy() {
    this._globalDataSubscription?.unsubscribe();
  }

  toggleTheme() {
    this._globalDataService.UpdateGlobalData(oldValue => ({
      ...oldValue,
      theme: (oldValue.theme === "light") ? "dark" : "light"
    }));
  }
}
