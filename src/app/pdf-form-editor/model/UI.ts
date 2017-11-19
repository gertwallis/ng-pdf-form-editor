export namespace UI {
    export enum EventType {
        Enter = 1,
        Exit = 2,
    }

    export class Scale {
        horiz:number;
        vertical: number;
    }

    // Class to communicate fields from the entry field to the page component to
    // place focus at the correct value.
    export class EditEvent {
        type: EventType;
        name: string;
        value: string;
        keyCode: number;
    }

    export class Size {
        width: number;
        height: number;
    }

    export class Position {
        left: number;
        top: number;
    }

    export class View {
        size: Size;
        position: Position;
    }
}
