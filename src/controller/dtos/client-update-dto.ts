import { Name } from "../../model/name";



export class ClientUpdateDTO{
    constructor(readonly name:Name, readonly document:string){
    }
}