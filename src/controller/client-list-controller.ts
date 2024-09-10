import { Request, Response } from "express";
import { ClientRepository } from "../model/repository/client-repository";



export class ClientListController {

    constructor (readonly repository: ClientRepository){

    }

    async execute(request: Request, response: Response) {
        try {
            const clientCollection = await this.repository.getAll();
            response.status(200).json({ clientCollection });

        } catch (error) {
          console.error('Error in execute method:', error);
          response.status(500).json({ error: 'Internal server error' });
        }
      }
      
}