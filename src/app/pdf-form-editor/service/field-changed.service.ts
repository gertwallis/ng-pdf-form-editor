import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { UI } from './../model/UI';

@Injectable()
export class FieldChangeService {
    private fieldSubject = new Subject<UI.LeaveField>();
    FieldState = this.fieldSubject.asObservable();

    exitField(field: UI.LeaveField) {
        console.log('EXIT FIELD: ' + field.name);
        this.fieldSubject.next(field);
    }

    nextField(): Observable<UI.LeaveField> {
        console.log('ENEXT FIELD: ');
        return this.fieldSubject.asObservable();
    }
}