import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calculator-view',
  templateUrl: './calculator-view.component.html',
  styleUrls: ['./calculator-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorViewComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  calculateExchangeRate(exchangeRate: {
    currencyFrom: string;
    currencyTo: string;
    qty: string;
  }): void {
    this.navigate(exchangeRate);
  }

  private navigate({ currencyFrom, currencyTo, qty }): void {
    if (currencyFrom !== currencyTo) {
      this.router.navigate([
        'calculator',
        'from',
        currencyFrom,
        'to',
        currencyTo,
        'amount',
        qty
      ]);
    }
  }
}
