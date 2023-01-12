import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appCurrency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch(value){
      case("eur"):
        return "\u20AC";
      case("gpp"):
        return "£";
      default:
        return value;
    }
  }

}
