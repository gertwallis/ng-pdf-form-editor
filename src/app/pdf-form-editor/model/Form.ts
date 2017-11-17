import { DocumentBase } from './DocumentBase';

// Form is similar to PDF - most notable difference are that the data fields
// are duplicated for every location. Created from the Pdf model and used to capture fields.
export namespace Form {

    // FormField combines the FieldData and Location into a single model.
    //   including a location (name not duplicated in data and location).
    export class Field extends DocumentBase.Field {
        value: string;
        // Flag set to true if the same name occurs in muleiple locations in the document (duplicated).
        multipleLocations = false;
        location: DocumentBase.Location = new DocumentBase.Location();
    }

    export class Page {
        active: boolean;
        pageNo: number;
        fields: Field[] = [];

        editable(): boolean {
            return this.fields.length > 0;
        }
    }

    export class Document extends DocumentBase.Document {
        pages: Page[] = [];
    }

}
