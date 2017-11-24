export namespace Base {

    export enum Format {
        Unknown = 0,
        AlphaNumeric = 1,
        Integer = 2,
        XBox = 3,
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

    export class Describe {
        name: string;
        label: string;
        description: string;
    }

    interface FixedSize {
        width: number;
        height: number;
    }

    interface FixedPosition {
        top: number;
        left: number;
    }

    export class Field extends Describe {
        format: Format;
        maxChar: number;
        groupName: string;
        required: false;
    }

    export class DataValue {
        name: string;
        value: string;
    }

    export class Location implements FixedSize, FixedPosition {
        tabOrder: number;
        top: number;
        left: number;
        width: number;
        height: number;
    }

    export class Document {
        id: string;
        title: string;
        description: string;
        url?: string;
        noOfPages: number;
        pdfBytes?: string;
        pageSize?: FixedSize;
    }
}
