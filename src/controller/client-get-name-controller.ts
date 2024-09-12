import { Request, Response } from "express";
import { ClientGetNameService } from "../services/client-get-name-service";



export class ClientGetNameController {

    constructor (readonly service: ClientGetNameService){

    }

    async execute(request: Request, response: Response) {
      let name:string = request.params.name

        try {
            const clientName = await this.service.execute(name);
            response.status(200).json({ clientName });

        } catch (error) {
          console.error('Error in execute method:', error);
          response.status(500).json({ error: 'Internal server error' });
        }
      }
      
}