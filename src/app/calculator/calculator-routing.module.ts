import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorViewComponent } from './calculator-view/calculator-view.component';
import { CurrencyDetailsComponent } from './calculator-view/currency-details/currency-details.component';

const CALCULATOR_ROUTES: Routes = [
  {
    path: '',
    component: CalculatorViewComponent,
    children: [
      {
        path: 'from/:currencyFrom/to/:currencyTo/amount/:qty',
        component: CurrencyDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(CALCULATOR_ROUTES)],
  declarations: []
})
export class CalculatorRoutingModule {}
