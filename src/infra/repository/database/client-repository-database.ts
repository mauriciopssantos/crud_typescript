import knex, { Knex } from 'knex';
import { Client } from "../../../model/client";
import { ClientRepository } from "../../../model/repository/client-repository";
import { development } from './knex-config';
import { Name } from '../../../model/name';
import { Uuid } from '../../../model/uuid';
import { ClientUpdateDTO } from '../../../controller/dtos/client-update-dto';




export class ClientRepositoryDatabase implements ClientRepository{
    
    private connection: Knex;
    
    constructor() {
        this.connection = knex(development)
    }
        
    async save(client: Client): Promise<void> {
        await this.connection('client').insert({
            'id': client.getId().getValue(),
            'name': client.getName(),
            'document': client.getDocument().getValue()
        })
    }
    async getAll(): Promise<Client[]> {
        const clients = await this.connection('client').select('*')

        const clientCollection = clients.map(client => {
            const id = client['id'];
            const name = client['name'];
            const document = client['document'];
            return Client.create(name, document, id);
        });
        
        return clientCollection;
    }

    async getName(name: Name): Promise<Client> {
        try {
            const results = await this.connection('client')
                .select('*')
                .where({ 'name': name.getValue() })
                .limit(1);
    
            if (results.length === 0) {
                throw new Error(`Client with name ${name.getValue()} not found`);
            }
    
            const client = results[0];
            return Client.create(
                client['name'], 
                client['document'], 
                client['id']
            );
        } catch (error) {
            console.error('Error fetching client:', error);
            throw new Error('Failed to fetch client');
        }
    }

    async getById(id: Uuid): Promise<Client> {
        try {
            const results = await this.connection('client')
                .select('*')
                .where({ 'id': id.getValue() })
                .limit(1);
    
            if (results.length === 0) {
                throw new Error(`Client with id ${id.getValue()} not found`);
            }
    
            const client = results[0];
            return Client.create(
                client['name'], 
                client['document'], 
                client['id']
            );
        } catch (error) {
            console.error('Error fetching client:', error);
            throw new Error('Failed to fetch client');
        }
    }
    
    
    async removeClient(id: Uuid): Promise<void> {
        await this.connection('client').where({'id': id.getValue()}).delete()
    }

    async updateClient(id: Uuid, clientDTO: ClientUpdateDTO): Promise<Client> {
        await this.connection('client').where({ 'id': id.getValue() }).update({
            'name': clientDTO.name,
            'document' : clientDTO.document
        })
        return await this.getById(id)
    } 
    
}