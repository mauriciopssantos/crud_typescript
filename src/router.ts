import { request, Request, Response, Router } from "express";
import { ClientRepositoryDatabase } from "./infra/repository/database/client-repository-database";

//import Controllers
import { ClientController } from "./controller/client-create-controller";
import { ClientListController } from "./controller/client-list-controller";
import { ClientGetNameController } from "./controller/client-get-name-controller";
import { ClientRemoveController } from "./controller/client-remove-controller";
import { ClientGetByIdController } from "./controller/client-get-byid-controller";
import { ClientUpdateController } from "./controller/client-update-byid-controller";


// Import services
import { ClientCreateService } from "./services/client-create-service";
import { ClientListService } from "./services/client-list-service";
import { ClientGetNameService } from "./services/client-get-name-service";
import { ClientRemoveService } from "./services/client-remove-service";
import { ClientGetByIdService } from "./services/client-get-byid-service";
import { ClientUpdateService } from "./services/client-update-service";


const router = Router()
const repository = new ClientRepositoryDatabase()

const clientCreateService = new ClientCreateService(repository);
const clientListService = new ClientListService(repository);
const clientGetNameService = new ClientGetNameService(repository);
const clientRemoveService = new ClientRemoveService(repository);
const clientGetByIdService = new ClientGetByIdService(repository);
const clientUpdateService = new ClientUpdateService(repository);

const clientController = new ClientController(clientCreateService);
const clientListController = new ClientListController(clientListService);
const clientGetNameController = new ClientGetNameController(clientGetNameService);
const clientRemoveClientController = new ClientRemoveController(clientRemoveService);
const clientGetByIdController = new ClientGetByIdController(clientGetByIdService);
const clientUpdateByIdController = new ClientUpdateController(clientUpdateService);



router.post('/client', async (request: Request, response: Response) => {
    try {
      await clientController.execute(request, response);
    } catch (error) {
      console.error('Error handling request:', error); // Log the error
      response.status(500).json({ error: 'Internal server error' });
    }
  });


router.get('/client', (request: Request, response: Response) => {
        clientListController.execute(request, response);
  });

router.get('/client/:name' ,(request: Request, response: Response) => {
        clientGetNameController.execute(request, response);
});

router.get('/client/:id', (request:Request, response: Response) => {
        clientGetByIdController.execute(request, response)
});

router.delete('/client/:id' ,(request: Request, response: Response) => {
      clientRemoveClientController.execute(request, response);
});

router.patch('/client/:id',(request: Request, response: Response) => {
      clientUpdateByIdController.execute(request, response);
})

export {router} 