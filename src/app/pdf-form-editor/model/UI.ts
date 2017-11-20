export namespace UI {

    export class Scale {
        horiz: number;
        vertical: number;
    }

    // Class to communicate fields from the entry field to the page component to
    // place focus at the correct value.


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

    export enum Direction {
        DontKnow = 0,
        Forward = 1,
        BackWard = 2,
    }

    export class LeaveFieldEvent {
        direction: Direction;
    }

    export class EditValueEvent {
        name: string;
        value: string;
    }
}
