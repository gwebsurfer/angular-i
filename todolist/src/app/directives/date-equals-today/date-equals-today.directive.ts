import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDateEqualsToday]',
})
export class DateEqualsTodayDirective {
  @Input() set appDateEqualsToday(date: Date) {
    const dateFormat = new Date(date);
    const today = new Date();

    if (today.toDateString() === dateFormat.toDateString()) {
      this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
    }
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {}
}
