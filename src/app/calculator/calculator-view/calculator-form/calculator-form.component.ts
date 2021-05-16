import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
import { Currency } from '../../../models/currency.interface';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.css']
})
export class CalculatorFormComponent implements OnInit {
  @Output() currencyExchangeFormChanges: EventEmitter<any> = new EventEmitter();

  public currencyExchangeForm: FormGroup;
  public readonly currencySelectItems$ = this.calculatorService.currencies.pipe(
    map(currencies =>
      currencies.map(currency => this.mapCurrencyToListItem(currency))
    )
  );
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private calculatorService: CalculatorService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    const { params } = this.activatedRoute.firstChild.snapshot;
    const { currencyFrom: from, currencyTo: to, qty } = params;
    const formValues = {
      from,
      to,
      qty
    };

    this.initCurrencyExChangeForm(formValues);

    this.currencyExchangeForm.valueChanges
      // .pipe(
      //   filter(currencyExchangeFormValues => currencyExchangeFormValues.qty > 0)
      // )
      .subscribe(currencyExchangeFormValues => {
        if (currencyExchangeFormValues.qty < 1) {
          this.currencyExchangeForm.patchValue({ qty: 1 });
        } else {
          this.currencyExchangeFormChanges.emit(currencyExchangeFormValues);
        }
      });
  }

  public toggleCurrencies(): void {
    const {
      value: { currencyFrom, currencyTo }
    } = this.currencyExchangeForm;

    this.currencyExchangeForm.patchValue({
      currencyFrom: currencyTo,
      currencyTo: currencyFrom
    });
  }

  private initCurrencyExChangeForm({
    from = 'gbp',
    to = 'usd',
    qty = '1'
  }): void {
    this.currencyExchangeForm = this.fb.group({
      currencyFrom: [from],
      currencyTo: [to],
      qty: [qty]
    });
  }

  private mapCurrencyToListItem({
    currency: text,
    base: value
  }: Currency): { value: string; text: string } {
    return {
      value,
      text
    };
  }
}
