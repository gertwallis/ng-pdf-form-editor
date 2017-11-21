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

import { FieldMovementService } from 'app/pdf-form-editor/service/field-movement.service';
import { UI } from 'app/pdf-form-editor/model/UI';

@Component({
  selector: 'edit-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class EditTextComponent implements OnChanges {

  @Input() active = false;
  @Input() name: string;
  @Input() value: string;
  @Input() tabIndex: number;

  // @ViewChild('inputHtml') childEditField: ElementRef;
  constructor(private moveService: FieldMovementService) { }

  ngOnChanges() {
    console.log('TEXT: Changes ' + this.name);

    if (this.active) {
      console.log('TEXT: Active ' + this.name);
      this.focus();
    }
  }

  focus() {
    console.log('TEXT: FOCUS ' + this.name);
    // this.childEditField.nativeElement.focus();
  }

  keyPressHandler(keyCode: KeyboardEvent) {
    console.log('TEXT: Key ' + keyCode.key);
    if (keyCode.keyCode === 13 ||
      keyCode.keyCode === 9 ||
      (keyCode.which === 9 && keyCode.shiftKey)) {
      keyCode.preventDefault();
      if (keyCode.which === 9 && keyCode.shiftKey) {
        this.moveField(UI.Direction.BackWard);
      } else {
        this.moveField(UI.Direction.BackWard)
      }
    }
  }

  moveField(direction: UI.Direction) {
    const field: UI.LeaveField = {
      direction: direction,
      name: this.name,
      tabIndex: this.tabIndex
    };

    this.moveService.exitField(field);
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
