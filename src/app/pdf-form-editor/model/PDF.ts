import { DocumentBase } from './DocumentBase';

// Retrieved through service
export namespace PDF {

    // Can have multiple locations for every data field. 
    export class Location extends DocumentBase.Location {
        // Corresponds to Data.Name
        name: string;
    }

    export class Page {
        pageNo: number;
        // pageSize: Size;
        locations: Location[] = [];
    }

    export class Document extends DocumentBase.Document {
        pages: Page[] = [];
        fields: DocumentBase.Field[] = [];
        data: DocumentBase.DataValue[] = [];
    }
}
