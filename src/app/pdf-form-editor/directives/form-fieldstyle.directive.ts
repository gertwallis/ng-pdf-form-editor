import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { UI } from '../model/UI';

@Directive({
  selector: '[fieldState]'
})
export class FieldStyleDirective implements OnChanges {
  @Input() fieldState: UI.DisplayState;

  constructor(private element: ElementRef) {
  }

  ngOnChanges() {
    switch(this.fieldState) {
      case UI.DisplayState.Changed:
        this.style.backgroundColor = 'lightgreen';
        break;
      case UI.DisplayState.Saved:
        this.style.backgroundColor = 'white';
        break;
      case UI.DisplayState.NoValue:
        this.style.backgroundColor = 'lightyellow';
        break;
      case UI.DisplayState.Invalid:
        this.style.backgroundColor = 'lightpink';
        break;
      case UI.DisplayState.Locked:
        this.style.display = 'none';
    }
  }

  private get style(): any {
    return this.element.nativeElement.style;
  }
}