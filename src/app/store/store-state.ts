import { Currency } from '../models/currency.interface';
import { CurrencyRate } from '../models/rate.interface';

export interface StoreState {
  currencies: Currency[];
  rates: CurrencyRate[];
  loggedUser: object;
}
