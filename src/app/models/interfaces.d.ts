declare namespace PdfModel {

    interface Describe {
        Name: string;
        Label: string;
        Description: string;        
    }

    interface Size {
        Width: number;
        Height: number;
    }

    interface Location extends Size {
        X: number;
        Y: number;
        PageNo: number;
    }
    
    enum DisplayState {
        None =  0,
        Saved = 1,
        Captured = 1
    }

    interface LocationField extends Location {
         Attributes            
    }

    interface Field extends Describe {
        // Field can occur in multiple locations. 
        Locations: LocationField[];
    }

    interface Page {
        IsShown: boolean;
        HasFields: boolean;
        PageNo: number;

        Fields: Field[];
    }

    interface Form{
        shown?: boolean;
        url?: string;
        pdfBytes?: string;
        noOfPages?: number;
        //Pages: Page[];
    }
}

