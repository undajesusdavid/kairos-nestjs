import { VocalistId } from "./VocalistId";

export interface VocalistProps {
    id: VocalistId;
    firstName: string;
    lastName: string;
}

export class Vocalist {
    private id: VocalistId;
    private firstName: string;
    private lastName: string;
    

    constructor(props: VocalistProps) {
        this.id = props.id;
        this.firstName = props.firstName;
        this.lastName = props.lastName;
    }

    // Getters
    getId(): string {
        return this.id.toString();
    }
    getFirstName(): string {
        return this.firstName;
    }
    getLastName(): string {
        return this.lastName;
    }

    // Setters
   
    setId(id: VocalistId): void {
        this.id = id;
    }
    setFirstName(firstName: string): void {
        this.firstName = firstName;
    }
    setLastName(lastName: string): void {
        this.lastName = lastName;
    }
}
