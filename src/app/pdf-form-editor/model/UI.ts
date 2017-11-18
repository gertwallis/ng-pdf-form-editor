export namespace UI {
    // Class to communicate fields from the entry field to the page component to
    // place focus at the correct value.
    export class EditValue {
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