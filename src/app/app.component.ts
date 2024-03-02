import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { Subscription } from 'rxjs';
import { GlobalData, IGlobalDataService } from './services/global-data/global-data.service.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'AngularBootstrapTemplate';

  private _globalDataSubscription: Subscription | undefined;
  globalData: GlobalData | undefined = undefined;

  constructor(private _globalDataService: IGlobalDataService) { }

  ngOnInit() {
    this._globalDataSubscription = this._globalDataService.GetGlobalDataSubject()
      .subscribe((globalData: GlobalData) => {
        this.globalData = globalData;
      })
  }

  ngOnDestroy() {
    this._globalDataSubscription?.unsubscribe();
  }
}
