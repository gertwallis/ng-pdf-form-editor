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
        TabOrder: number;
    }

    export enum DisplayState {
        None = 0,
        Saved = 1,
        Captured = 1
    }


    export class DataField extends Describe {
        Type: string;
        Value: string;
        MaxChar: number;
    }

    export class FieldData {
        Fields: DataField[];
    }

    export class Page {
        IsShown: boolean;
        Editable: boolean;
        PageNo: number;
        Locations: Location[];
    }

    export class Form {
        Pages?: Page[];
        FieldData?: FieldData;
        Shown?: boolean;
        Url?: string;
        PdfBytes?: string;
        NoOfPages(): number {
            return this.Pages.length;
        };
        
        PageSize?: Size;
    }
}
