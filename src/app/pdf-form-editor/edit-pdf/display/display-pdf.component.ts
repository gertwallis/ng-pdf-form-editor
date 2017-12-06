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
    @Input() public page = 1;
    @Input() public zoom = 1.0;

    currentSize: UI.Size;
    currentPage: number;

    @Output() scaleChange = new EventEmitter<UI.Size>();

    private pdf: PDFDocumentProxy;

    constructor() {
        this.currentSize = new UI.Size();
        this.currentPage = 1;
    }

    setSource(url: string) {
        this.pdfSrc = url;
    }

    goToPage(pageNo) {
        this.currentPage = pageNo;

        const pageElements = document.getElementsByClassName('page');
        for (let i = 0; i < pageElements.length; i++) {
            const pageElement = <HTMLElement>pageElements.item(i);
            pageElement.style.position = 'absolute';
            pageElement.style.zIndex = '1';

            if (pageElement.dataset['pageNumber'] === pageNo.toString()) {
                pageElement.style.display = 'block';
            } else {
                pageElement.style.display = 'none';
            }

            if (this.currentSize.width !== pageElement.offsetWidth || this.currentSize.height !== pageElement.offsetHeight) {
                this.currentSize.width = pageElement.offsetWidth;
                this.currentSize.height = pageElement.offsetHeight;
                this.scaleChange.emit(this.currentSize);                
            }
        }
    }

    // noOfPages() {
    //     if (this.pdf) {
    //         return this.pdf.numPages;
    //     }
    //     return 0;
    // }

    // incrementPage(amount: number) {
    //     this.page += amount;
    // }

    incrementZoom(amount: number) {
        this.zoom += amount;
    }

    // rotate(angle: number) {
    //     this.rotation += angle;
    // }

    // pageChanged() {

    //     const pageElement = document.getElementsByClassName('page');

    //     if (pageElement.length === 1) {
    //         console.log('PAGE CHANGED: ' + this.page);
    //         this.setPageSize(pageElement[0]);
    //     }
    // }

    // onSize(size: UI.Size) {
    //     console.log('ON SIZE: ' + size.width + '/' + size.height);
    //     if (this.currentSize.width !== size.width || this.currentSize.height !== size.height) {
    //         this.currentSize = size;
    //         // this.goToPage(this.currentPage);
    //         this.scaleChange.emit(size);
    //     }
    // }

    //     private setPageSize(element) {
    //         const size = new UI.Size();
    //         size.width = element.clientWidth;
    //         size.height = element.clientHeight;

    //         this.scaleChange.emit(size);
    //    }

    private afterLoadComplete(pdf: PDFDocumentProxy) {
        console.log('AFTER LOAD COMPLETE: ' + this.page);
        this.pdf = pdf;
        // Hate introducing delays, but we can't continue until the underlying pdf
        // viewer has finished drawing the pdf.
        setTimeout(() => {
                this.goToPage(this.currentPage);
          }, 150);
    }
}

