import { DocumentBase } from './DocumentBase';

// Retrieved through service
export namespace PDF {

    export class Field extends DocumentBase.Field {
        hidden: boolean;
    }

    // Can have multiple locations for every data field.
    export class Location extends DocumentBase.Location {
        // Corresponds to Data.Name
        name: string;
        groupName: string;
    }

    export class Page {
        pageNo: number;
        // pageSize: Size;
        locations: Location[] = [];
    }

    export class Document extends DocumentBase.Document {
        pages: Page[] = [];
        fields: Field[] = [];
        data: DocumentBase.DataValue[] = [];
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
