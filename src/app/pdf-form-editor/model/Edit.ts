import { DocumentBase } from './DocumentBase';

// Form is similar to PDF - most notable difference are that the data fields
// are duplicated for every location. Created from the Pdf model and used to capture fields.
export namespace Edit {

    // FormField combines the FieldData and Location into a single model.
    //   including a location (name not duplicated in data and location).
    export class Field extends DocumentBase.Field {
        value: string;
        // Flag set to true if the same name occurs in muleiple locations in the document (duplicated).
        multipleLocations = false;
        location: DocumentBase.Location = new DocumentBase.Location();
    }

    export enum GroupType {
        None = 0,
        XBox = 1,
        Entity = 2,
        Other = 3
    }

    export class Group extends DocumentBase.Location {
        type: GroupType;
        name: string;

        fields: Field[] = [];
        hasFields(): boolean {
            return this.fields.length > 0;
        }

        setOffset() {

            // This funcion should be called once after all the fields are set
            // Safty check to make sure you don't do it twice.
            if (!this.top && !this.left) {
                this.left = this.top = 99999;
                this.width = this.height = 0;

                // Set the top left of the group
                for (const formField of this.fields) {
                    this.top = (formField.location.top < this.top) ? formField.location.top : this.top;
                    this.left = (formField.location.left < this.left) ? formField.location.left : this.left;
                    this.width = (formField.location.width > this.width) ? formField.location.width : this.width;
                    this.height = (formField.location.height > this.height) ? formField.location.height : this.height;
                }

                // Make all the fields relative to group position.
                for (const formField of this.fields) {
                    formField.location.top -= this.top;
                    formField.location.left -= this.left;
                }
            }
        }
    }

    export class Page {
        active: boolean;
        pageNo: number;
        groups: Group[] = [];

        editable(): boolean {
            return this.groups.length > 0;
        }

        addField(field: Field) {
            const group = this.getGroup(field.groupName);
            group.fields.push(field);
        }

        getGroup(groupName): Group {
            if (!groupName) {
                groupName = 'root';
            }
            let group = this.groups.find(x => x.name === groupName);
            if (!group) {
                group = new Group();
                group.name = groupName;
                this.groups.push(group);
            }

            return group;
        }

        setOffset() {
            // Set the top left of the group
            for (const group of this.groups) {
                group.setOffset();
            }
        }
    }

    export class Document extends DocumentBase.Document {
        pages: Page[] = [];

        addPage(page: Page) {
            page.setOffset();
            this.pages.push(page);
        }

    }

}