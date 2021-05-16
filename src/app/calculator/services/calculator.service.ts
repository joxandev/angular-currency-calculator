import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { filter,map, tap } from 'rxjs/operators';
import { Currency } from '../../models/currency.interface';
import { CurrencyRate } from '../../models/rate.interface';
import { StoreState } from '../../store/store-state';
import { Store, ActionTypes } from '../../store/store.service';
import { ApiCalculatorService } from './api-calculator.service';

@Injectable()
export class CalculatorService {
  constructor(
    private store: Store,
    private apiCalculatorService: ApiCalculatorService
  ) {
    this.hydrateStore();
  }

  get currencies(): Observable<Currency[]> {
    return this.store.state$.pipe(map(({ currencies }) => currencies));
  }

  currencyConversionRate(
    currencyBase: string,
    currency: string
  ): Observable<CurrencyRate> {
    const currencyRate$ = this.store.state$.pipe(
      filter(store =>!!store.rates?.length),
      map((store: StoreState) =>
        store.rates.find(
          rate => rate.base === currencyBase && rate.currency === currency
        )
      )
    );

    return currencyRate$;
  }

  private hydrateStore(): void {
    const currencies$$: Observable<
      Currency[]
    > = this.apiCalculatorService.getCurrencies();
    const rates$: Observable<
      CurrencyRate[]
    > = this.apiCalculatorService.getRates();

    const currenciesAndRates$: Observable<
      [Currency[], CurrencyRate[]]
    > = forkJoin([currencies$$, rates$]);

    currenciesAndRates$
      .pipe(
        tap(([currencies, rates]) => {
          this.store.dispatch({
            type: ActionTypes.SET_CURRENCIES,
            payload: currencies
          });
          this.store.dispatch({
            type: ActionTypes.SET_RATES,
            payload: rates
          });
        })
      )
      .subscribe(res => {
      });
  }
}
