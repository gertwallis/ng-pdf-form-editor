export namespace Model {
    export class Describe {
        Name: string;
        Label: string;
        Description: string;
    }

    export class Size {
        Width: number;
        Height: number;
    }

    export class Location extends Size {
        // Corresponds to Field.Name
        Name: string;
        X: number;
        Y: number;
        PageNo: number;
    }

    export enum DisplayState {
        None = 0,
        Saved = 1,
        Captured = 1
    }


    export class Field extends Describe {
        // Field can occur in multiple locations.
        Value: string;
    }

    export class Page {
        IsShown: boolean;
        HasFields: boolean;
        PageNo: number;
        Locations: Location[];
    }

    export class Form {
        Pages?: Page[];
        Fields?: Field[];
        Shown?: boolean;
        Url?: string;
        PdfBytes?: string;
        NoOfPages(): number {
            return this.Pages.length;
        }
    }
}
