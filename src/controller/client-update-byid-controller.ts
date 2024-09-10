import { Request, Response } from "express";
import { ClientRepository } from "../model/repository/client-repository";
import { ClientUpdateDTO } from "./dtos/client-update-dto";
import { Client } from "../model/client";
import { Uuid } from "../model/uuid";



export class ClientUpdateByIdController{
    constructor(readonly repository: ClientRepository){
    }

    async execute(request: Request, response: Response){
        const { id } = request.params
        const {name, document} = request.body
        let client = Client.create(name, document, id)
        const clientDto = new ClientUpdateDTO(client.getName(), client.getDocument().getValue())
        client = await this.repository.updateClient(client.getId(), clientDto) 
        response.status(200).json({client})
    }
}