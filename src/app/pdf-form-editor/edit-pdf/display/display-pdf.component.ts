import { PdfViewerComponent } from 'ng2-pdf-viewer/dist/pdf-viewer.component';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';

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

    @Input() private originalSize = true;
    @Input() private renderText = false;
    @Input() private rotation = 0;
    @Input() private showAll = false;

    @Output() scaleChange = new EventEmitter<UI.Size>();

    private pdf: PDFDocumentProxy;

    constructor(public changeDetection: ChangeDetectorRef) {
    }

    setSource(url: string) {
        this.pdfSrc = url;
    }


    goToPage(pageNumber) {
        // this.changeDetection.detach();
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

    pageChanged() {
        const pageElement = document.getElementsByClassName('page');

        if (pageElement.length === 1) {
            this.setPageSize(pageElement[0]);
        }
    }

    private setPageSize(element) {
        const size = new UI.Size();
        size.width = element.clientWidth;
        size.height = element.clientHeight;

        this.scaleChange.emit(size);

        this.changeDetection.detectChanges();
    }
    private afterLoadComplete(pdf: PDFDocumentProxy) {
        this.pdf = pdf;
        // Hate introducing delays, but we can't continue until the underlying pdf
        // viewer has finished drawing the pdf.
        setTimeout(() => {
                this.pageChanged();
          }, 150);
    }
}


// https://blog.angularindepth.com/everything-you-need-to-know-about-change-detection-in-angular-8006c51d206f