import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InitWcService {
  private _wcData: {
    id?: string;
    plataform?: string;
    deviceId?: string;
  } = {
    id: '30036470',
    plataform: 'web',
    deviceId: '16182412-1fb1-47df-bdba-b19e4a81df38',
  };

  private _showWC$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  get showWC$() {
    return this._showWC$;
  }

  get wcData() {
    return this._wcData;
  }

  set setShowWC$(update: boolean) {
    this._showWC$.next(update);
  }

  set setWcData(data: { id?: string; plataform?: string; deviceId?: string }) {
    this._wcData = data;
  }

  constructor() {}
}
