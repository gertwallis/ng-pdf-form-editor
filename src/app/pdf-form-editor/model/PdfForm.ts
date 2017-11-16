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


    export class FieldData extends Describe {
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

    export class FormData {
        fields: FieldData[] = [];
    }

    export class Size {
        width: number;
        height: number;
    }

    export class Location extends Size {
        // Corresponds to Field.Name
        name: string;
        tabIndex: number;
        x: number;
        y: number;
    }

    // FormField combines the FieldData and Location into a single model.
    export class FormField {
        state: DisplayState = DisplayState.None;
        location: Location = new Location();
        data: FieldData = new FieldData();
    }

    export class Page {
        pageNo: number;
        // pageSize: Size;
        locations: Location[] = [];
    }

    export class FormPage {
        active: boolean;
        pageNo: number;
        fields: FormField[] = [];

        editable(): boolean {
            return this.fields.length > 0;
        }
    }

    export class Form {

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
