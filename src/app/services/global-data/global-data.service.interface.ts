import { Subject } from "rxjs";

export abstract class IGlobalDataService {
  public abstract GetGlobalDataSubject(): Subject<GlobalData>;
  public abstract UpdateGlobalData(updateGlobalDataFunc: (oldGlobalData: GlobalData) => GlobalData): void;
  public abstract SetGlobalData(data: GlobalData): void;
}

export interface GlobalData {
  theme: "light" | "dark";
}
