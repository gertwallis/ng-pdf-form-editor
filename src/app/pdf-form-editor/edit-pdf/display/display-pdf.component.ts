import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';

import { PDFDocumentProxy, PDFProgressData } from 'ng2-pdf-viewer';
import { PdfViewerComponent } from 'ng2-pdf-viewer/dist/pdf-viewer.component';

// Models
import { UI } from './../../model/UI';
import { Base } from './../../model/Base';

@Component({
    'selector': 'edit-pdf-viewer',
    'templateUrl': './display-pdf.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayPdfComponent {

    @ViewChild('pdfViewer') pdfViewer: PdfViewerComponent;

    @Input() public pdfSrc: any;
    @Input() public zoom: number;

    currentSize: UI.Size;
    currentPage: number;

    @Output() scaleChange = new EventEmitter<UI.Size>();

    private pdf: PDFDocumentProxy;
    private pageLoaded: boolean;

    constructor(private changeDetection: ChangeDetectorRef) {
        this.currentSize = new UI.Size();
        this.currentPage = 1;
    }

    setSource(url: string) {
        this.pdfSrc = url;
    }

    setZoom(zoomAmount: number) {
        this.zoom = zoomAmount;

        // Set flag so we know to reset the zoom.
        this.changeDetection.markForCheck();
        setTimeout(() => {
            this.goToPage(this.currentPage);
        }, 500);
    }

    goToPage(pageNo) {

        // Make sure everything is rendered before we load the page.
        this.pageLoaded = false;
        this.waitUntillLoaded(this.pdf.numPages * 10, pageNo);
    }

    waitUntillLoaded(noOfTries: number, pageNo: number) {
        // console.log('WAIT: ' + noOfTries + " : " + this.zoom);
        if (this.pagesLoaded()) {
            this.loadPageIfRendered(pageNo);
        } else if (noOfTries > 0) {
            noOfTries--;
            setTimeout(() => {
                this.waitUntillLoaded(noOfTries, pageNo);
            }, 200);
        }
    }

    pagesLoaded(): boolean {
        const pageElements = document.getElementsByClassName('page');
        if (pageElements.length === 0) {
            return false;
        } else {
            // See if the last page is loaded
            const pageElement = <HTMLElement>pageElements.item(pageElements.length - 1);

            if (!pageElement.dataset['loaded']) {
                return false;
            }
            //             for (let i = 0; i < pageElements.length; i++) {
            // }
        }

        return true;
    }

    private loadPageIfRendered(pageNo: number) {
        if (!this.pageLoaded) {
            this.currentPage = pageNo;

            const pageElements = document.getElementsByClassName('page');
            for (let i = 0; i < pageElements.length; i++) {

                const pageElement = <HTMLElement>pageElements.item(i);
                pageElement.style.position = 'absolute';
                pageElement.style.zIndex = '1';

                if (pageElement.dataset['loaded']) {
                    if (pageElement.dataset['pageNumber'] === pageNo.toString()) {
                        pageElement.hidden = false;
                    } else {
                        pageElement.hidden = true;
                    }
                }

                this.notifyWidth(pageElement.offsetWidth, pageElement.offsetHeight);
            }

            this.pageLoaded = true;
        }
    }

    base64ToArrayBuffer(base64) {
        const binary_string = window.atob(base64);
        const len = binary_string.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
    }

    setPdfSourceBase64(base64) {
        this.pdfSrc = this.base64ToArrayBuffer(base64);
    }

    setPdfSourceURL(url) {
        this.pdfSrc = url;
    }

    notifyWidth(width, height) {
        if (width !== 0 && (this.currentSize.width !== width || this.currentSize.height !== height)) {
            this.currentSize.width = width;
            this.currentSize.height = height;
            this.scaleChange.emit(this.currentSize);
        }
    }

    pageChanged() {
        // const pageElements = document.getElementsByClassName('page');

        // if (pageElements.length > 0) {
        //     const pageElement = <HTMLElement>pageElements.item(0);

        //     this.notifyWidth(pageElement.clientWidth, pageElement.clientHeight);

        //     if (this.redrawPage) {
        //         this.goToPage(this.currentPage);
        //     }
        // }
    }

    afterLoadComplete(pdf: PDFDocumentProxy) {
        this.pdf = pdf;
    }
}

