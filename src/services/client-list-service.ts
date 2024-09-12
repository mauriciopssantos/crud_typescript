import { ClientRepository } from "../model/repository/client-repository";




export class ClientListService{
    constructor (readonly repository: ClientRepository){   
    }

    async execute(){
        const clientCollection = await this.repository.getAll();
        return clientCollection
    }
}