import { Client } from "../model/client";
import { Name } from "../model/name";
import { ClientRepository } from "../model/repository/client-repository";



export class ClientCreateService{
    constructor (readonly repository: ClientRepository){   
    }

    async execute(name: Name, document: string){
        const client = Client.create(name,document)
        await this.repository.save(client)
        return client
    }
}