import { Base } from './Base';

export namespace UI {

    export class Scale {
        horiz: number;
        vertical: number;
    }

    export class Size {
        width: number;
        height: number;
    }

    export enum Direction {
        Current = 0, // Click action
        Forward = 1,
        BackWard = 2,
    }

    export enum DisplayState {
        Locked = 0,  // Value from server don't edit.
        Saved = 1,   // Value from server - editable.
        Changed = 2, // Changed value in edit session.
        NoValue = 3,  // No value supplied,
        Invalid = 4  // Has a value but failed validation.
    }

    export class FieldStyle extends Base.Location {
        locked: boolean;
        state: DisplayState;
        valid: boolean;
    }

    // Class to communicate field movement
    //  to place focus at the correct next.
    export class LeaveField {
        direction: Direction;
        name: string;
        tabIndex: number;
    }

    export class FieldEdited {
        name: string;
        value: string;
    }

    export class FieldChanged {
        documentId: string;
        name: string;
        value: string;
    }

    export enum MessageLevel {
        success = 0,
        info = 1,
        warning = 2,
        error = 3,
    }

    export class Message {
        level: MessageLevel;
        text: string;
    }

    export class Preferences {
        locked: boolean;
        defaultZoom = 1.2;
        zoomIncrement = 0.2;
        shade = false;
    }

}
