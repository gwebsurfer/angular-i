import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPluralize]',
})
export class PluralizeDirective {
  @Input('appPluralize') count: number | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.updateText();
  }

  ngOnChanges() {
    this.updateText();
  }

  private updateText() {
    const pluralText = this.count === 1 ? 'item' : 'itens';
    this.renderer.setProperty(
      this.el.nativeElement,
      'textContent',
      `${this.count} ${pluralText}`
    );
  }
}
