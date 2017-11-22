import { Base } from './Base';

export namespace UI {

    export class Scale{
        horiz: number;
        vertical: number;
    }

    export class Size{
        width: number;
        height: number;
    }

    export enum Direction {
        Current = 0, // Click action
        Forward = 1,
        BackWard = 2,
    }

    export class FieldStyle extends Base.Location {
        
    }
    
    // Class to communicate field movement
    //  to place focus at the correct next.
    export class LeaveField {
        direction: Direction;
        name: string;
        tabIndex: number;
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

   

}
