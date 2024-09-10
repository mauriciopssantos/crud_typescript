import { Cep } from "./cep"
import { Cnpj } from "./cnpj"
import { Document } from "./document"

export class DocumentFactory {
    static create(value: string){
        if (Cnpj.isValid(value)){
            return new Cnpj(value)
        }

        if (Cep.isValid(value)){
            return new Cep(value)
        }

        throw new Error(`Document invalid ${value}`)
    }


}