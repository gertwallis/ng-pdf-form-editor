import { Subscription } from 'rxjs/Rx';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

import { NavigationComponent } from './edit-pdf/navigation/navigation.component';

// Services
import { UpdateService } from './service/update.service';

// Models
import { Base } from './model/Base';
import { Edit } from './model/Edit';
import { UI } from './model/UI';

@Component({
  selector: 'edit-form',
  templateUrl: './edit-pdf.component.html',
  styleUrls: ['./edit-pdf.component.css']
})
export class PdfEditComponent {
  fieldChangeSubscription: Subscription;

  @Input() documentModel: Edit.Document;

  @Output() fieldChanged = new EventEmitter<UI.FieldEdited>();

  constructor(private updateService: UpdateService) {
    this.fieldChangeSubscription = this.updateService.FieldChanged
      .subscribe((field: UI.FieldEdited) => {
        this.fieldUpdated(field);
      });
  }

  fieldUpdated(field: UI.FieldEdited) {
    this.fieldChanged.emit(field);
  }
}
