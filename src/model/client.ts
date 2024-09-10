import { Document } from "./document"
import { DocumentFactory } from "./document-factory"
import { Name } from "./name"
import { Uuid } from "./uuid"


export class Client{
    private id: Uuid
    private name: Name
    private document: Document

    constructor(name: Name, document: Document, id?: string){
        this.id = id ? new Uuid(id) : Uuid.randomGenerator()
        this.name = name
        this.document = document
    }

    static create(name: Name, document: string, id?: string): Client{
        const currentDocument = DocumentFactory.create(document)

        return new Client(name, currentDocument, id)
    }

    public getId(): Uuid{
        return this.id
    }

    public getName(): Name{
        return this.name
    }

    public getDocument(): Document{
        return this.document
    }
}
