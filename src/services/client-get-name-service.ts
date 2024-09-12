import { Name } from "../model/name";
import { ClientRepository } from "../model/repository/client-repository";




export class ClientGetNameService{
    constructor (readonly repository: ClientRepository){   
    }

    async execute(name: string){
        const clientName = await this.repository.getName(new Name(name));
        return clientName
    }
}