import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyExchange'
})
export class CurrencyExchangePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (Array.isArray(args)) {
      const [qty] = args as [number];

      return Number(value) * qty;
    }

    return null;
  }
}
