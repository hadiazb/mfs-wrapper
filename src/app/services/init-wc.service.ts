import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

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
    id: '53742057',
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

  constructor(private httpClient: HttpClient) {}

  async getNewToken() {
    try {
      const response = await this.httpClient
        .post<{ access_token: string; id_token: string }>(
          'https://id-tigo-gt-stg.tigocloud.net/oauth/token',
          {
            skipRedirectCallback: false,
            client_id: 'hXLnF6hqXo4D4SHFeICsm5yzAiDaW1iV',
            grant_type: 'refresh_token',
            refresh_token: 'Fb82snxPDndLHcDl6Zdoj2Ybo8zvfHf0hXH1WX7GHti_d',
            redirect_uri: false,
          }
        )
        .toPromise();

      const accessToken = response?.access_token;
      const idToken = response?.id_token;

      console.log({ accessToken, idToken });
    } catch (error) {
      console.log(error);
    }
  }

  setToken(token: string) {
    localStorage.setItem('IdToken', token);
  }
}
