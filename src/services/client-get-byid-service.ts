import { ClientRepository } from "../model/repository/client-repository";
import { Uuid } from "../model/uuid";



export class ClientGetByIdService{
    constructor (readonly repository: ClientRepository){   
    }

    async execute(id: string){
        const client = this.repository.getById(new Uuid(id))
        return client
    }
}