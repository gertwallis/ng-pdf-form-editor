import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import {
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  Output,
  Renderer,
  ViewChild,
} from '@angular/core';

import { UI } from 'app/pdf-form-editor/model/UI';

@Component({
  selector: 'edit-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class EditTextComponent {

  @Input() active = false;
  @Input() name: string;
  @Input() value: string;
  @Input() tabIndex: number;

  // @ViewChild('inputHtml') childEditField: ElementRef;
  constructor() { }

  focus() {
    // TODO: NEED TO MAKE SURE WE GET THE TEXT FOCUS.
    // console.log('TEXT: FOCUS ' + this.name);
    // this.childEditField.nativeElement.focus();
  }

  

  blurField() {
    console.log('TEXT blur function called');
    // this.fireLeaveEvent(UI.Direction.DontKnow);
    // this.fireDataEvent();
  }

  changed() {
    // console.log('changed function called');
  }


}

// Custom Controls
// https://blog.thoughtram.io/angular/2016/07/27/custom-form-controls-in-angular-2.html
// Validators
// https://codecraft.tv/courses/angular/advanced-topics/configurable-custom-validators/
// Tooltip
// https://webdesign.tutsplus.com/tutorials/css-tooltip-magic--cms-28082
// https://github.com/ng2-ui/tooltip
