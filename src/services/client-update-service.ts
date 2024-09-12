// services/client-update-service.ts
import { ClientRepository } from "../model/repository/client-repository";
import { ClientUpdateDTO } from "../controller/dtos/client-update-dto";
import { Client } from "../model/client";
import { Name } from "../model/name";

export class ClientUpdateService {
  constructor(private repository: ClientRepository) {}

  async execute(id: string, name: Name, document: string) {
    let client = Client.create(name, document, id);
    const clientDto = new ClientUpdateDTO(client.getName(), client.getDocument().getValue());
    client = await this.repository.updateClient(client.getId(), clientDto);
    return client
  }
}
