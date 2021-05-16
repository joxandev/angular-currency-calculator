import { stringify } from '@angular/compiler/src/util';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap, tap, take, takeLast } from 'rxjs/operators';
import { Store } from '../../../store/store.service';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyDetailsComponent implements OnInit {
  currencyConversionData$: Observable<any>;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private calculatorService: CalculatorService,
    private store: Store
  ) {}

  ngOnInit() {
    const params$ = this.activatedRoute.params;

    this.currencyConversionData$ = params$.pipe(
      switchMap(({ currencyFrom, currencyTo, qty }) =>
        this.calculatorService
          .currencyConversionRate(currencyFrom, currencyTo)
          .pipe(
            map(({ currency, base, value }) => ({
              base,
              value,
              qty,
              currency: currency.toUpperCase()
            }))
          )
      )
    );
  }
}
