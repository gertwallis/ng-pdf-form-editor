import { Base } from './Base';

// Form is similar to PDF - most notable difference are that the data fields
// are duplicated for every location. Created from the Pdf model and used to capture fields.
export namespace Edit {

    export enum GroupType {
        Root = 0,
        XBox = 1,
        Entity = 2,
        Other = 3
    }

    // FormField combines the FieldData and Location into a single model.
    //   including a location (name not duplicated in data and location).
    export class Field extends Base.Field {
        value: string;
        // Flag set to true if the same name occurs in muleiple locations in the document (duplicated).
        multipleLocations = false;
        location: Base.Location = new Base.Location();
    }

    export class Group extends Base.Location {
        type: GroupType;
        name: string;

        fields: Field[] = [];
        hasFields(): boolean {
            return this.fields.length > 0;
        }
    }

    export class Page {
        active: boolean;
        pageNo: number;
        groups: Group[] = [];

        // editable(): boolean {
        //     return this.groups.length > 0;
        // }

        // addField(field: Field) {
        //     const group = this.getGroup(field.groupName);
        //     group.fields.push(field);
        // }

        // getGroup(groupName): Group {
        //     if (!groupName) {
        //         groupName = 'root';
        //     }
        //     let group = this.groups.find(x => x.name === groupName);
        //     if (!group) {
        //         group = new Group();
        //         group.name = groupName;
        //         this.groups.push(group);
        //     }

        //     return group;
        // }

        // initialize() {
        //     // Calculate the tab order of the fields based of where the groups tab sequence
        //     // are in the overall tab order.
        //     // Example:
        //     // address1 and address 2 are horizontally next to each other
        //     // 1:??     2:??
        //     // 3: Street1    4: ??     5: Street2
        //     // 6: City1      7: ??     8: City2
        //     // 9: Zip1                 10:Zip
        //     // 11: Phone1              11: Phone2
        //     // 13: ??   14:??
        //     //
        //     // The tab groups would be as follow:
        //     //    root 1 2 4 7 13 14
        //     //    addres1: 3 6 9 11
        //     //    addres2: 5 8 10 12
        //     // To fill in the addresses sequentially desired tab order would be:
        //     //    1 2 [3 6 9 11] 4 7  [5 8 10 12] 13 14

        //     const groupTabOrder = [];
        //     let rootTabOrder: number[];

        //     for (const group of this.groups) {
        //         group.initialize();

        //         if (group.name === 'root') {
        //             rootTabOrder = group.getTabOrder();
        //         } else {
        //             groupTabOrder.push(group.getTabOrder());
        //         }
        //     }
        //     this.tabs = [];

        //     if (groupTabOrder) {
        //         // Sort the arrays based on the tab order of the first tab order.
        //         groupTabOrder.sort(this.compareArray);
        //     }

        //     if (rootTabOrder) {
        //         for (const groupOrder of groupTabOrder) {
        //             if (rootTabOrder.length > 0) {
        //                 if (rootTabOrder[rootTabOrder.length - 1] < groupOrder[0]) {
        //                     // all of the root calues greater than the first group element
        //                     this.tabs = this.tabs.concat(rootTabOrder);
        //                     rootTabOrder = [];
        //                 } else {
        //                     for (const rootOrder of rootTabOrder) {
        //                         if (rootOrder > groupOrder[0]) {
        //                             const index = rootTabOrder.indexOf(rootOrder);
        //                             this.tabs = this.tabs.concat(rootTabOrder.splice(0, index));
        //                             break;
        //                         }
        //                     }
        //                 }
        //             }
        //             this.tabs = this.tabs.concat(groupOrder);
        //         }

        //         this.tabs = this.tabs.concat(rootTabOrder);
        //     } else {
        //         for (const tabOrder of groupTabOrder) {
        //             this.tabs = this.tabs.concat(tabOrder);
        //         }
        //     }
        // }

        // Sort an array based on the first value of the array. 
        // compareArray(a: number[], b: number[]) {
        //     if (a[0] < b[0]) {
        //         return -1;
        //     }

        //     if (a[0] > b[0]) {
        //         return 1;
        //     }

        //     return 0;
        // }
    }

    export class Document extends Base.Document {
        pages: Page[] = [];

        // addPage(page: Page) {
        //     page.initialize();
        //     this.pages.push(page);
        // }
    }
}
