import { Subject } from "rxjs";

export abstract class ILayoutDataService {
  constructor() { }  
  public abstract GetLayoutDataSubject(): Subject<LayoutData>;
  public abstract SetLayoutData(layoutData: LayoutData): void;
  public abstract ClearLayoutData(): void;
}

export interface LayoutData {
    header: HeaderData;
    footer: FooterData;
}
export interface HeaderData {
    title?: string;
    subTitle?: string;

    isNavbarShowing?: boolean;
}
export interface FooterData {

}
