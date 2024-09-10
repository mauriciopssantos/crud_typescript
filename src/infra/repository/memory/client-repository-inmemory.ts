import { Client } from "../../../model/client";
import { Name } from "../../../model/name";
import { ClientRepository } from "../../../model/repository/client-repository";
import { Uuid } from "../../../model/uuid";



export class ClientRepositoryInMemory implements ClientRepository{
    [x: string]: any;
    getById(id: Uuid): Promise<Client> {
        throw new Error("Method not implemented.");
    }
    updateClient(id: Uuid): Promise<Client> {
        throw new Error("Method not implemented.");
    }
    removeClient(id: Uuid): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getName(name: Name): Promise<Client> {
        throw new Error("Method not implemented.");
    }
    private clientCollection: Array<Client> = []
    
    async save(client: Client): Promise<void> {
        this.clientCollection.push(client)
    }

    async getAll(): Promise<Array<Client>> {
        return this.clientCollection
    }

}