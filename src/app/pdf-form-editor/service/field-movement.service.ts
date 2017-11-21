import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { UI } from './../model/UI';

@Injectable()
export class FieldMovementService {
    private fieldSubject = new Subject<UI.LeaveField>();
    // LeaveField = this.fieldSubject.asObservable();

    exitField(field: UI.LeaveField) {
        this.fieldSubject.next(field);
    }

    nextField(): Observable<UI.LeaveField> {
        return this.fieldSubject.asObservable();
    }
}