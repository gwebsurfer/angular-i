import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDateMask]',
})
export class DateMaskDirective {
  constructor() {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const formattedValue = this.formatDate(input.value);

    input.value = formattedValue;
  }

  private formatDate(value: string): string {
    const cleanedValue = this.cleanInput(value);

    if (cleanedValue.length >= 3 && cleanedValue.length < 5) {
      return this.formatPartialDate(cleanedValue);
    } else if (cleanedValue.length >= 5) {
      return this.formatFullDate(cleanedValue);
    }

    return cleanedValue;
  }

  private cleanInput(value: string): string {
    return value.replace(/\D/g, '');
  }

  private formatPartialDate(value: string): string {
    return `${value.slice(0, 2)}/${value.slice(2)}`;
  }

  private formatFullDate(value: string): string {
    return `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4)}`;
  }
}
