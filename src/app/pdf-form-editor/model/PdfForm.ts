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

    export class ScaledLocation{
        name: string;
        pageNo: number;
        tabOrder: number;

        pdf: Location = new Location();
        view: Location = new Location();
    }

    export class Scale {
        horiz: number;
        vertical: number;
    }

    export class Page {
        isShown: boolean;
        editable: boolean;
        pageNo: number;
        locations: ScaledLocation[] = [];
    }

    export class Form {
        private _scale: Scale;
  
        pages?: Page[] = [];
        data?: FormData = new FormData();
        pageSize?: Size;
        shown?: boolean;

        public get scale(): Scale{
            return this._scale;
        }

        public set scale(scale: Scale){
            this._scale = scale;
            
            // Note: may want to change this to a QueryList or make it 
            // an observable pattern to propagate changes to UI. 
            for (const page of this.pages) {
                for (const location of page.locations) {
                    location.view.y = location.pdf.width * scale.horiz;
                    location.view.height = location.pdf.height * scale.horiz;

                    location.view.x = location.pdf.height * scale.vertical;
                    location.view.width = location.pdf.width * scale.vertical;
                }
            }
        }

        noOfPages(): number {
            return this.pages.length;
        };

    }

    export class Document {
        form: Form = new Form();
        url?: string;
        pdfBytes?: string;
    }
}
