import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[editFieldStyle]'
})
export class FieldStyleDirective {

  @Input('editFieldStyle') highlightColor: string;

  constructor(private el: ElementRef) { }


  @HostListener('mouseenter') onMouseEnter() {
    // this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.highlight(null);
  }

  private highlight(color: string) {
    // this.el.nativeElement.style.backgroundColor = color;
  }
}