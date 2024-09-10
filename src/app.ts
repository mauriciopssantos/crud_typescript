import express, {json} from "express";
import { router } from "./router";


export class App{
    private server: express.Application

    constructor(){
        this.server = express()
        this.server.use(json())
        this.server.use(router)

        // Add this log to confirm the server is starting
        console.log('Server is starting...');
    }
    public getServe(): express.Application{
        return this.server
    }

}


