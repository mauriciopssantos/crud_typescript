import { Request, Response } from "express";
import { ClientUpdateService } from "../services/client-update-service";



export class ClientUpdateController{
    constructor(readonly service: ClientUpdateService){
    }

    async execute(request: Request, response: Response){
        const { id } = request.params
        const {name, document} = request.body
        const updatedClient = await this.service.execute(id, name, document)
        response.status(200).json({updatedClient})
    }
}