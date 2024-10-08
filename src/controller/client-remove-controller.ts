import { Request, Response } from "express";
import { Uuid } from "../model/uuid";
import { ClientRemoveService } from "../services/client-remove-service";

export class ClientRemoveController {
    constructor(readonly service: ClientRemoveService) {}

    async execute(request: Request, response: Response) {
        // Extract id from request parameters.
        const idParam = request.params.id; 

        if (!idParam) {
            response.status(400).json({ error: 'ID parameter is missing' });
            return;
        }

        let id: Uuid;
        try {
            id = new Uuid(idParam); // Convert the id parameter to a Uuid instance
        } catch (e) {
            response.status(400).json({ error: 'Invalid ID format' });
            return;
        }

        try {
            await this.service.execute(id);
            response.status(204).json({});
        } catch (error) {
            console.error('Error in execute method:', error);
            response.status(500).json({ error: 'Internal server error' });
        }
    }
}
