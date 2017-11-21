import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { UI } from './../model/UI';

@Injectable()
export class FieldChangeService {
    private fieldSubject = new Subject<UI.LeaveField>();
    FieldState = this.fieldSubject.asObservable();

    exitField(field: UI.LeaveField) {
        this.fieldSubject.next(field);
    }

    nextField(): Observable<UI.LeaveField> {
        return this.fieldSubject.asObservable();
    }
}
