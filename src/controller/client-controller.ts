import { Request, Response } from "express";
import { ClientRepository } from "../model/repository/client-repository";
import { Client } from "../model/client";



export class ClientController {

    constructor (readonly repository: ClientRepository){

    }

    async execute(request: Request, response: Response) {
        try {
          const { name, document } = request.body;
          if (!name || !document) {
            return response.status(400).json({ error: 'Name and document are required' });
          }
          const client = Client.create(name, document);
          await this.repository.save(client);
          response.status(201).json({ client });
        } catch (error) {
          console.error('Error in execute method:', error);
          response.status(500).json({ error: 'Internal server error' });
        }
      }
      
}