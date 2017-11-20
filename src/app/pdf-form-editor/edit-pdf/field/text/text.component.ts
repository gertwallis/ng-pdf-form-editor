import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import {
    AfterViewInit,
    Component,
    DoCheck,
    ElementRef,
    EventEmitter,
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
export class EditTextComponent implements OnChanges{

  @Input() active = false;
  @Input() tabIndex = false;
  @Input() name: string;
  @Input() value: string;

  @Output() bubbleLeaving = new EventEmitter<UI.LeaveFieldEvent>();
  @Output() bubbleEdit = new EventEmitter<UI.EditValueEvent>();

  @ViewChild('inputHtml') childEditField: ElementRef;
  constructor(private elementRef: ElementRef,
    private renderer: Renderer) { }

  ngOnChanges() {
    console.log('TEXT: Changes ' + this.name);
    
    if (this.active) {
      console.log('TEXT: Active ' + this.name);
      this.focus();
    }
  }

 focus() {
    console.log('TEXT: FOCUS ' + this.name);
    this.elementRef.nativeElement.focus() ;
 }

  keyPressHandler(keyCode: KeyboardEvent) {
    console.log('TEXT: Key ' + keyCode.key);
    // if (keyCode.keyCode === 13 ||
    //   keyCode.keyCode === 9 ||
    //   (keyCode.which === 9 && keyCode.shiftKey)) {
    //   keyCode.preventDefault();
    //   // Enter key presed - done editing
    //   if (keyCode.keyCode === 13 || keyCode.keyCode === 9) {
    //     this.fireLeaveEvent(UI.Direction.Forward);
    //   } else {
    //     // Shift tab
    //     this.fireLeaveEvent(UI.Direction.BackWard);
    //   }

    //   this.fireDataEvent();
    // }
  }


  blurField() {
    console.log('TEXT blur function called');
    // this.fireLeaveEvent(UI.Direction.DontKnow);
    // this.fireDataEvent();
  }

  changed() {
    // console.log('changed function called');
  }

  fireLeaveEvent(direction: UI.Direction) {
    // console.log('Text: Fire leave event');
    // const leaveEvent = new UI.LeaveFieldEvent();
    // leaveEvent.direction = direction;
    // this.bubbleLeaving.emit(leaveEvent);
  }

  fireDataEvent() {
    // console.log('Text: Fire data event');
    // const editEvent = new UI.EditValueEvent();
    // editEvent.name = this.name;
    // editEvent.value = this.value;
    // this.bubbleEdit.emit(editEvent);
  }

}
