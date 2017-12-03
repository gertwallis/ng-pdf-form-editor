import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { UI } from './../model/UI';

@Injectable()
export class UpdateService {
    private fieldSubject = new Subject<UI.LeaveField>();
    private editedSubject = new Subject<UI.FieldEdited>();

    FieldState = this.fieldSubject.asObservable();
    FieldEdited = this.editedSubject.asObservable();

    exitField(field: UI.LeaveField) {
        this.fieldSubject.next(field);
    }

    nextField(): Observable<UI.LeaveField> {
        return this.fieldSubject.asObservable();
    }

    editedField(field: UI.FieldEdited) {
        this.editedSubject.next(field);
    }

}
