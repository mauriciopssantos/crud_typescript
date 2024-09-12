import { ClientRepository } from "../model/repository/client-repository";
import { Uuid } from "../model/uuid";




export class ClientRemoveService{
    constructor (readonly repository: ClientRepository){   
    }

    async execute(id:Uuid){
        const clientRemove = await this.repository.removeClient(id);
        return clientRemove
    }
}