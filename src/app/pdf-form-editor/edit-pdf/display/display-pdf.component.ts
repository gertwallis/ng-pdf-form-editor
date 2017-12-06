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

import { PdfViewerComponent } from 'ng2-pdf-viewer/dist/pdf-viewer.component';

// Models
import { UI } from './../../model/UI';
import { Base } from './../../model/Base';

@Component({
    'selector': 'edit-pdf-viewer',
    'templateUrl': './display-pdf.html',
    //  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayPdfComponent {

    @ViewChild('pdfViewer') pdfViewer: PdfViewerComponent;

    @Input() public pdfSrc: any;
    @Input() public zoom = 1.0;

    currentSize: UI.Size;
    currentPage: number;
    redrawPage = false;

    @Output() scaleChange = new EventEmitter<UI.Size>();

    private pdf: PDFDocumentProxy;

    constructor() {
        this.currentSize = new UI.Size();
        this.currentPage = 1;
    }

    setSource(url: string) {
        this.pdfSrc = url;
    }

    incrementZoom(amount: number) {
        this.zoom += amount;

        // Set flag so we know to reset the zoom. 
        this.redrawPage = true;
    }


    goToPage(pageNo) {

        this.currentPage = pageNo;

        const pageElements = document.getElementsByClassName('page');
        for (let i = 0; i < pageElements.length; i++) {
            const pageElement = <HTMLElement>pageElements.item(i);
            pageElement.style.position = 'absolute';
            pageElement.style.zIndex = '1';

            if (pageElement.dataset['pageNumber'] === pageNo.toString()) {
                // pageElement.style.display = 'block';
                pageElement.hidden = false;
            } else {
                // pageElement.style.display = 'none';
                pageElement.hidden = true;
            }

            this.notifyWidth(pageElement.offsetWidth, pageElement.offsetHeight);
        }

        this.redrawPage = false;
    }

    notifyWidth(width, height) {
        if (width !== 0 && (this.currentSize.width !== width || this.currentSize.height !== height)) {
            this.currentSize.width = width;
            this.currentSize.height = height;
            this.scaleChange.emit(this.currentSize);
        }
    }

    pageChanged() {
        const pageElements = document.getElementsByClassName('page');

        if (pageElements.length > 0) {
            const pageElement = <HTMLElement>pageElements.item(0);

            this.notifyWidth(pageElement.clientWidth, pageElement.clientHeight);

            if (this.redrawPage) {
                this.goToPage(this.currentPage);
            }

        }
    }

    private afterLoadComplete(pdf: PDFDocumentProxy) {
        this.pdf = pdf;
        // Hate introducing delays, but we can't continue until the underlying pdf
        // viewer has finished drawing the pdf.
        setTimeout(() => {
            // this.goToPage(this.currentPage);
        }, 150);
    }
}

