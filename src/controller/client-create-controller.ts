import { Request, Response } from "express";
import { ClientCreateService } from "../services/client-create-service";



export class ClientController {

    constructor (readonly service: ClientCreateService){

    }

    async execute(request: Request, response: Response) {
        try {
          const { name, document } = request.body;
          if (!name || !document) {
            return response.status(400).json({ error: 'Name and document are required' });
          }
          const client = await this.service.execute(name,document);
          response.status(201).json({ client });
        } catch (error) {
          console.error('Error in execute method:', error);
          response.status(500).json({ error: 'Internal server error' });
        }
      }
      
}