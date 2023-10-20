import { Pipe, PipeTransform } from '@angular/core';

interface IProps {
  currency: string;
  minimumFractionDigits: number;
  style: string;
}

@Pipe({
  name: 'currencyFormat',
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: string, args: IProps): unknown {
    console.log(args);

    const formattedValue = Number(value).toLocaleString('pt-BR', args);

    return formattedValue;
  }
}
