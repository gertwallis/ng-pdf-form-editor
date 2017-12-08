import { Subscription } from 'rxjs/Rx';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
//  import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

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
})
export class PdfEditComponent implements OnChanges {
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
            // TODO: Can not set the state here - need to move it from UI model to Edit model 
            //     - it is set on field coming from the server.
            // sameName.state = UI.DisplayState.Changed;
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


  public ngOnChanges(changes: SimpleChanges): void {
    console.log('CHANGES LOGGED in EDIT_PDF');
  }
}
