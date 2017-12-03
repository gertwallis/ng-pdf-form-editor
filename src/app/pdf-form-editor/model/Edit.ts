import { Base } from './Base';

// Form is similar to PDF - most notable difference are that the data fields
// are duplicated for every location. Created from the Pdf model and used to capture fields.
export namespace Edit {

    export enum GroupType {
        Root = 0,
        XBox = 1,
        Entity = 2,
        Other = 3
    }

    // FormField combines the FieldData and Location into a single model.
    //   including a location (name not duplicated in data and location).
    export class Field extends Base.Field {
        value: string;
        // Flag set to true if the same name occurs in muleiple locations in the document (duplicated).
        multipleLocations = false;
        location: Base.Location = new Base.Location();
    }

    export class Group extends Base.Location {
        type: GroupType;
        name: string;

        fields: Field[] = [];
        hasFields(): boolean {
            return this.fields.length > 0;
        }
    }

    export class Page {
        active: boolean;
        pageNo: number;
        groups: Group[] = [];

    }

    export class Document extends Base.Document {
        pages: Page[] = [];
    }
}
