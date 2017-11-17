export namespace DocumentBase {
    export class Describe {
        name: string;
        label: string;
        description: string;
    }

    export enum Format {
        Unknown = 0,
        AlphaNumeric = 1,
        Integer = 2,
        CheckBox = 3,
        TextArea = 4,
        Date = 5,
        Dollar = 6,
        Percent = 7,
        Number = 8,
        PhoneNumber = 9,
        Signature = 10,
        SocialSecurityNumber = 11,
        State = 12
    }

    export class Field extends Describe {
        state: DisplayState;
        format: Format;
        value: string;
        maxChar: number;
    }

    export enum DisplayState {
        None = 0,
        Saved = 1,
        Captured = 2,
        Hidden = 3
    }

    export class Size {
        width: number;
        height: number;
    }

    export class DataValue {
        name: string;
        value: string;
    }
    
    export class Location extends Size {
        tabOrder: number;
        x: number;
        y: number;
    }

    export class Document {
        id: string;
        title: string;
        description: string;
        url?: string;
        pdfBytes?: string;
        pageSize?: Size;
    }
}
