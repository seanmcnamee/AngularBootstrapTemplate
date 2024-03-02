import { Injectable } from '@angular/core';
import { GlobalData, IGlobalDataService } from './global-data.service.interface';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService implements IGlobalDataService {
  private static defaultGlobalData: GlobalData = {
    theme: "light"
  };
  private globalData: BehaviorSubject<GlobalData> = new BehaviorSubject<GlobalData>(GlobalDataService.defaultGlobalData);

  public GetGlobalDataSubject(): Subject<GlobalData> {
    return this.globalData;
  }
  public UpdateGlobalData(updateGlobalDataFunc: (oldGlobalData: GlobalData) => GlobalData): void {
    this.SetGlobalData(updateGlobalDataFunc(this.globalData.getValue()));
  }
  public SetGlobalData(data: GlobalData) {
    this.globalData.next(data);
  }
}

