import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Currency } from '../../models/currency.interface';
import { Store } from '../../store/store.service';

@Injectable()
export class ApiCalculatorService {
  private readonly _baseUrl: string =
    'https://currency-calc-b312c-default-rtdb.europe-west1.firebasedatabase.app';
  constructor(private http: HttpClient, private store: Store) {}

  getCurrencies(): Observable<Currency[]> {
    const mapEntriesToList = (currencies): Currency[] =>
      Object.entries(currencies).map(([id, entry]: [string, Currency]) => ({
        ...entry,
        id
      }));
    return this.http
      .get(`${this._baseUrl}/currencies.json`)
      .pipe(map(mapEntriesToList));
  }

  getRates(): Observable<any> {
    return this.http
      .get(`${this._baseUrl}/rates.json`)
      .pipe(map(rates => this.mapObjectToList(rates)));
  }

  updateRates(rates: any): Observable<any> {
    return this.http.patch(`${this._baseUrl}/rates.json`, rates);
  }

  private mapObjectToList<T>(firebaseResponse: object): T[] {
    return Object.entries(firebaseResponse).map(([id, entry]: [string, T]) => ({
      ...entry,
      id
    }));
  }
}
