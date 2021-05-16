import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { CurrencyExchangePipe } from './currency-exchange.pipe';

@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [CurrencyExchangePipe],
  exports: [LayoutModule, CurrencyExchangePipe]
})
export class SharedModule {}
