import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { UI } from './../model/UI';

@Injectable()
export class UpdateService {
    private fieldSubject = new Subject<UI.LeaveField>();
    private changedSubject = new Subject<UI.FieldEdited>();

    FieldState = this.fieldSubject.asObservable();
    FieldChanged = this.changedSubject.asObservable();

    exitField(field: UI.LeaveField) {
        this.fieldSubject.next(field);
    }

    nextField(): Observable<UI.LeaveField> {
        return this.fieldSubject.asObservable();
    }

    changedField(field: UI.FieldEdited) {
        this.changedSubject.next(field);
    }

}
