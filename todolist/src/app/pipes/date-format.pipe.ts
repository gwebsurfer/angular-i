import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDateFormat',
})
export class CustomDateFormatPipe implements PipeTransform {
  transform(date: Date | null): string {
    if (!date) {
      return '';
    }

    const datePipe = new DatePipe('en-US');
    return datePipe.transform(date, 'dd/MM/yyyy') || '';
  }
}
