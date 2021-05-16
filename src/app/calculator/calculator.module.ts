import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorViewComponent } from './calculator-view/calculator-view.component';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CurrenciesListComponent } from './calculator-view/currencies-list/currencies-list.component';
import { CurrencyDetailsComponent } from './calculator-view/currency-details/currency-details.component';
import { RouterModule } from '@angular/router';
import { ApiCalculatorService } from './services/api-calculator.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorFormComponent } from './calculator-view/calculator-form/calculator-form.component';
import { CalculatorService } from './services/calculator.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CalculatorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CalculatorViewComponent,
    CurrenciesListComponent,
    CurrencyDetailsComponent,
    CalculatorFormComponent
  ],
  providers: [ApiCalculatorService, CalculatorService]
})
export class CalculatorModule {}
