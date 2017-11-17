import { PdfViewerComponent } from 'ng2-pdf-viewer/dist/pdf-viewer.component';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DocumentBase } from 'app/pdf-form-editor/model/DocumentBase';

@Component({
    'selector': 'display-pdf',
    'templateUrl': './display-pdf.html'
})
export class DisplayPdfComponent {

    @ViewChild('pdfViewer') pdfViewer: PdfViewerComponent;

    @Input() public pdfSrc: string;
    @Input() public page = 1;
    @Input() public zoom = 1.0;

    @Input() private originalSize = true;
    @Input() private renderText = false;
    @Input() private rotation = 0;
    @Input() private showAll = false;

    @Output() scaleChange = new EventEmitter<DocumentBase.Size>();

    private pdf: PDFDocumentProxy;

    constructor() {
    }

    setSource(url: string) {
        this.pdfSrc = url;
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

    private pageChanged() {

        const pageElement = document.getElementsByClassName('page');

        if (pageElement.length === 1) {
            const size = new DocumentBase.Size();
            size.width = pageElement[0].clientWidth;
            size.height = pageElement[0].clientHeight;

            this.scaleChange.emit(size);
        }
    }

    private afterLoadComplete(pdf: PDFDocumentProxy) {
        this.pdf = pdf;
    }
}
