import { Request, Response } from "express";
import { ClientListService } from "../services/client-list-service";



export class ClientListController {

    constructor (readonly service: ClientListService){

    }

    async execute(request: Request, response: Response) {
        try {
            const clientCollection = await this.service.execute();
            response.status(200).json({ clientCollection });

        } catch (error) {
          console.error('Error in execute method:', error);
          response.status(500).json({ error: 'Internal server error' });
        }
      }
      
}