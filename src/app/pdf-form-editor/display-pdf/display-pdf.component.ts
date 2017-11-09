import { PdfViewerComponent } from 'ng2-pdf-viewer/dist/pdf-viewer.component';
import { Component, Input, ViewChild } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    'selector': 'display-pdf',
    'templateUrl': './display-pdf.html'
})
export class DisplayPdfComponent {

    @ViewChild('pdfViewer') pdfViewer: PdfViewerComponent;

    @Input() private pdfSrc: string;

    @Input() private originalSize = true;
    @Input() private page = 1;
    @Input() private renderText = false;
    @Input() private rotation = 0;
    @Input() private showAll = false;
    @Input() private zoom = 1.0;

    private pdf: PDFDocumentProxy;

    constructor() {
    }

    goToPage(pageNumber) {
        this.page = pageNumber;
    }

    noOfPages() {
        if (this.pdf) {
            return this.pdf.numPages;
        }
        return 0;
    }

    incrementPage(amount: number) {
        this.page += amount;
    }

    incrementZoom(amount: number) {
        this.zoom += amount;
    }

    rotate(angle: number) {
        this.rotation += angle;
    }


    private afterLoadComplete(pdf: PDFDocumentProxy) {
        this.pdf = pdf;
    }
}
