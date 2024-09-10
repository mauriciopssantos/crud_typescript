import { Request, Response } from "express";
import { ClientRepository } from "../model/repository/client-repository";
import { Name } from "../model/name";



export class ClientGetNameController {

    constructor (readonly repository: ClientRepository){

    }

    async execute(request: Request, response: Response) {
      let name:string | Name = request.params.name
      name = new Name(name)

        try {
            const clientName = await this.repository.getName(name);
            response.status(200).json({ clientName });

        } catch (error) {
          console.error('Error in execute method:', error);
          response.status(500).json({ error: 'Internal server error' });
        }
      }
      
}