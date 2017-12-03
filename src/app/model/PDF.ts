// Retrieved through service
export namespace PDF {

    export class DocumentId {
        id: string;
        name: string;
        description: string;
    }

    export class DocumentList {
        ids: DocumentId[] = [];
    }
}
