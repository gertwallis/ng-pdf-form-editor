import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { UI } from './../model/UI';

@Injectable()
export class PageNavigationService {
    private lockSubject = new Subject<boolean>();
    private shadeSubject = new Subject<boolean>();
    private pageSubject = new Subject<number>();
    private zoomSubject = new Subject<number>();
    private changeScaleSubject = new Subject<UI.Size>();
    
    LockState = this.lockSubject.asObservable();
    ShadeState = this.shadeSubject.asObservable();
    PageState = this.pageSubject.asObservable();
    ZoomState = this.zoomSubject.asObservable();
    ChangeScaleState = this.changeScaleSubject.asObservable();

    lock(lock: boolean) {
        this.lockSubject.next(lock);
    }

    shade(shade: boolean) {
        this.shadeSubject.next(shade);
    }

    zoomIn(zoom: number) {
        this.zoomSubject.next(zoom);
    }

    gotoPage(page: number) {
        this.pageSubject.next(page);
    }

    changeScale(scale: UI.Size) {
        this.changeScaleSubject.next(scale);
    }

    nextLock(): Observable<boolean> {
        return this.lockSubject.asObservable();
    }

    nextshade(): Observable<boolean> {
        return this.shadeSubject.asObservable();
    }

    nextpage(): Observable<number> {
        return this.pageSubject.asObservable();
    }

    nextzoom(): Observable<number> {
        return this.zoomSubject.asObservable();
    }

    nextchangescale(): Observable<UI.Size> {
        return this.changeScaleSubject.asObservable();
    }
}
