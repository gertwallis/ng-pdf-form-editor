import { Subscription } from 'rxjs/Rx';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() fieldChanged = new EventEmitter<UI.FieldChanged>();

  constructor(private updateService: UpdateService) {
    this.fieldChangeSubscription = this.updateService.FieldEdited
      .subscribe((field: UI.FieldEdited) => {
        this.fieldUpdated(field);
      });
  }

  setSameFields(fieldName: string, newValue: string) {
    this.documentModel.pages.forEach(page => {
      page.groups.forEach(group => {
        group.fields.filter(field => field.name === fieldName).forEach(sameName => {
          if (sameName.value !== newValue) {
            sameName.value = newValue;
          }
        });
      });
    });
  }

  fieldUpdated(field: UI.FieldEdited) {

    this.setSameFields(field.name, field.value);

    // There could be multiple editors open in the same application.
    //    Need to associate the change event with the document.
    const changedField = new UI.FieldChanged();
    changedField.documentId = this.documentModel.id;
    changedField.name = field.name;
    changedField.value = field.value;

    this.fieldChanged.emit(changedField);

  }

}
