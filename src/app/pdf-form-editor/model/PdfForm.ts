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

        findField(name: string) {
            const field = this.fields.filter(x => x.name === name);

            // Expecting to find only one but if more - return first.
            if (field.length > 0) {
                return field[0];
            }

            // Returning an empty object - the use case is generally to display the data field.
            // for a location. Bad data but returning an undefined will trow an error in the UI
            // based on bad data. Should probably do avalidation check for good data. but don't want
            // UI have to check for bad data.
            return new FieldData();
        }
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
        active: boolean;
        pageNo: number;
        // pageSize: Size;
        locations: ScaledLocation[] = [];

        public editable() {
            // Can only edit pages which has editable locations.
            return this.locations.length > 0;
        }
    }

    export class Form {
        private _scale: Scale;

        pages?: Page[] = [];
        data?: FormData = new FormData();
        pageSize?: Size;
        active?: boolean;

        public get scale(): Scale {
            return this._scale;
        }

        public set scale(scale: Scale) {
            this._scale = scale;

            // Note: may want to change this to a QueryList or make it
            // an observable pattern to propagate changes to UI.
            for (const page of this.pages) {
                for (const location of page.locations) {
                    location.view.y = location.pdf.y * scale.vertical;
                    location.view.height = location.pdf.height * scale.vertical;

                    location.view.x = location.pdf.x * scale.horiz;
                    location.view.width = location.pdf.width * scale.horiz;
                }
            }
        }

        noOfPages(): number {
            return this.pages.length;
        };

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
