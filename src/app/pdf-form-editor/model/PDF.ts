import { Base } from './Base';

// Retrieved through service
export namespace PDF {

    export class Field extends Base.Field {
        hidden: boolean;
    }

    // Can have multiple locations for every data field.
    export class Location extends Base.Location {
        // Corresponds to Data.Name
        name: string;
        groupName: string;
    }

    export class Page {
        pageNo: number;
        // pageSize: Size;
        locations: Location[] = [];
    }

    export class Document extends Base.Document {
        pages: Page[] = [];
        fields: Field[] = [];
        data: Base.DataValue[] = [];
        noOfPages: number;
    }

    export class DocumentId {
        id: string;
        name: string;
        description: string;
    }

    export class DocumentList {
        ids: DocumentId[] = [];
    }
}
