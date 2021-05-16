import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Currency } from '../models/currency.interface';
import { CurrencyRate } from '../models/rate.interface';
import { BaseStore } from './base.store';
import { StoreState } from './store-state';

export const INITIAL_STATE: StoreState = {
  loggedUser: {},
  currencies: [],
  rates: []
};

export const enum ActionTypes {
  SET_USER = 'set user',
  SET_CURRENCIES = 'set currencies',
  SET_RATES = 'set rates'
}

@Injectable({ providedIn: 'root' })
export class Store extends BaseStore<StoreState> {
  constructor() {
    super(INITIAL_STATE);
  }

  public setLoggedUser(user: object): StoreState {
    return { ...this.state, loggedUser: user } as StoreState;
  }

  public setCurrencies(currencies: Currency[]): StoreState {
    return { ...this.state, currencies } as StoreState;
  }

  public setRates(rates: CurrencyRate[]): StoreState {
    return { ...this.state, rates } as StoreState;
  }

  reducer({ type, payload }: { type: string; payload: any }): StoreState {
    switch (type) {
      case ActionTypes.SET_USER:
        return this.setLoggedUser(payload);
      case ActionTypes.SET_CURRENCIES:
        return this.setCurrencies(payload);
      case ActionTypes.SET_RATES:
        return this.setRates(payload);
      default:
        return this.state;
    }
  }
}
