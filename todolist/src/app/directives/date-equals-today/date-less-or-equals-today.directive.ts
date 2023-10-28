import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDateLessOrEqualToday]',
})
export class DateLessOrEqualTodayDirective {
  @Input() set appDateLessOrEqualToday(date: Date) {
    const inputDate = new Date(date);
    const today = new Date();

    if (inputDate <= today) {
      this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
    }
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {}
}
