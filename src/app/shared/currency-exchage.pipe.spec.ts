import { CurrencyExchangePipe } from './currency-exchange.pipe';

describe('Currency Exchange Pipe', () => {

    const pipe:CurrencyExchangePipe = new CurrencyExchangePipe();
    let rate:number =1.5;
    let qty:number =1;

    it('should return null if no paramters provided',()=>{
        const transform = pipe.transform(rate)
        expect(transform).toBeNull();
    });

     it('should return 3 with rate of 1.5 and qty of 2', () => {
        const transform = pipe.transform(rate,[2]);
        expect(transform).toEqual(3);
    });
})
