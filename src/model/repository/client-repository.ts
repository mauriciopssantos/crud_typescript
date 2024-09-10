import { ClientUpdateDTO } from "../../controller/dtos/client-update-dto";
import { Client } from "../client";
import { Name } from "../name";
import { Uuid } from "../uuid";



export interface ClientRepository{
    save(client: Client): Promise<void>
    getAll(): Promise<Array<Client>>
    getName(name: string|Name): Promise<Client>
    getById(id:Uuid): Promise<Client>
    removeClient(id:Uuid): Promise<void>
    updateClient(id:Uuid, clientDTO: ClientUpdateDTO ): Promise<Client>
}