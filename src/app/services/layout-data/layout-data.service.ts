import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ILayoutDataService, LayoutData } from './layout-data.service.interface';

@Injectable({
  providedIn: 'root'
})
export class LayoutDataService implements ILayoutDataService {
  private layoutData: Subject<LayoutData> = new Subject<LayoutData>();

  constructor() { }

  public GetLayoutDataSubject(): Subject<LayoutData> {
    return this.layoutData;
  }
  public SetLayoutData(layoutData: LayoutData): void {
    this.layoutData.next(layoutData);
  }
  public ClearLayoutData(): void{
    const emptyLayoutData: LayoutData = {
      header: {},
      footer: {}
    }

    this.SetLayoutData(emptyLayoutData);
  }
}
