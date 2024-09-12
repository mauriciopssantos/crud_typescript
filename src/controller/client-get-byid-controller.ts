import { Request, Response } from "express";
import { Uuid } from "../model/uuid";
import { ClientGetByIdService } from "../services/client-get-byid-service";



export class ClientGetByIdController {

    constructor(readonly service: ClientGetByIdService) {}

    async execute(request: Request, response: Response) {
        let id : string = request.params.id;
        
        try {
            // Assuming `id` is a string and directly used by the repository
            const client = await this.service.execute(id);
            response.status(200).json({ client });
        } catch (error) {
            console.error('Error in execute method:', error);
            response.status(500).json({ error: 'Internal server error' });
        }
    }
}