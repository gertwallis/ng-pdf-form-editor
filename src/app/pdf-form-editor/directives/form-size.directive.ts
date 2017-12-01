import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

import { UI } from  './../model/UI';

@Directive({
  selector: '[editPageSize]'
})
export class PageSizeDirective {
  @Input('pageSize') size: UI.Size;

  constructor(private element: ElementRef) { }

  private setSize(size: UI.Size) {
    this.element.nativeElement.style.width = size.width;
    this.element.nativeElement.style.hight = size.height;
  }
}
