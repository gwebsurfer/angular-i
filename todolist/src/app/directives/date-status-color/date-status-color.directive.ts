import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDateStatusColor]',
})
export class DateColorDirective {
  @Input() set appDateStatusColor(status: string) {
    if (status === 'done') {
      this.renderer.setStyle(this.element.nativeElement, 'color', 'lightgrey');
    }
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {}
}
