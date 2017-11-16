export namespace Model {
    export class Describe {
        name: string;
        label: string;
        description: string;
    }

    export enum Format {
        Unknown = 0,
        AlphaNumeric = 1,
        Integer = 2,
        Date = 3,
        Dollar = 4,
        Percent = 5,
        Number = 6,
        PhoneNumber = 7,
        Signature = 8
    }


    export class FieldData extends Describe {
        format: Format;
        value: string;
        maxChar: number;
    }

    export enum DisplayState {
        None = 0,
        Saved = 1,
        Captured = 1
    }

    export class FormData {
        displayState: DisplayState = DisplayState.None;
        fields: FieldData[] = [];
    }

    export class Size {
        width: number;
        height: number;
    }

    export class Location extends Size {
        // Corresponds to Field.Name
        x: number;
        y: number;
    }

    export class ScaledLocation {
        name: string;
        // pageNo: number;
        tabIndex: number;

        pdf: Location = new Location();
        view: Location = new Location();
    }

    // Scale to convert from PDF coordinates to View
    export class Scale extends Size {
        horiz: number;
        vertical: number;
    }

    export class Page {
<<<<<<< HEAD
        isShown: boolean;
=======
        active: boolean;
>>>>>>> 66695d728aa0f6d657ca57958603f8eda048eb6c
        pageNo: number;
        // pageSize: Size;
        locations: ScaledLocation[] = [];

        editable(): boolean {
            return this.locations.length > 0;
        }
    }

    export class Form {
        public  scale: Scale;

        pages?: Page[] = [];
        data?: FormData = new FormData();
        pageSize?: Size;
        active?: boolean;
    }

    export class Document {
        id: string;
        form: Form = new Form();
        title: string;
        description: string;
        url?: string;
        pdfBytes?: string;
    }
}
