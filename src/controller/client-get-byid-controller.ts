import { ClientRepository } from "../model/repository/client-repository";
import { Client } from "../model/client";
import { Request, Response } from "express";
import { Uuid } from "../model/uuid";



export class ClientGetByIdController {

    constructor(readonly repository: ClientRepository) {}

    async execute(request: Request, response: Response) {
        let id : string|Uuid = request.params.id;
        id = new Uuid(id)
        
        try {
            // Assuming `id` is a string and directly used by the repository
            const client = await this.repository.getById(id);
            response.status(200).json({ client });
        } catch (error) {
            console.error('Error in execute method:', error);
            response.status(500).json({ error: 'Internal server error' });
        }
    }
}