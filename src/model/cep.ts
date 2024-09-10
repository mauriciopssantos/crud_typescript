import { Document } from "./document";


export class Cep implements Document{
    
    private value: string

    constructor(value:string){
        if (!Cep.isValid(value)){
        throw new Error(`CEP invalid ${value}`)
        }
        this.value = value
    }

    static isValid(value:string): boolean {
        return value.length == 8
    }

    getDocument(): Document {
        return this
    }
    getValue(): string {
        return this.value
    }   
}