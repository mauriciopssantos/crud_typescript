import { validate as validateUuid, v4 as uuidv4 } from "uuid";

export class Uuid {
    private value: string;

    constructor(value: string) {
        if (!validateUuid(value)) {
            throw new Error(`ID invalid: ${value}`);
        }
        this.value = value;
    }

    static randomGenerator(): Uuid {
        return new Uuid(uuidv4());
    }

    public getValue(): string {
        return this.value;
    }
}
