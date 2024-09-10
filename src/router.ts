import { request, Request, Response, Router } from "express";
//import { ClientRepositoryInMemory } from "./infra/repository/memory/client-repository-inmemory";
import { ClientController } from "./controller/client-controller";
import { ClientListController } from "./controller/client-list-controller";
import { ClientRepositoryDatabase } from "./infra/repository/database/client-repository-database";
import { ClientRepository } from "./model/repository/client-repository";
import { ClientGetNameController } from "./controller/client-get-name-controller";
import { ClientRemoveController } from "./controller/client-remove-controller";
import { ClientGetByIdController } from "./controller/client-get-byid-controller";
import { ClientUpdateByIdController } from "./controller/client-update-byid-controller";

const router = Router()
//const repository = new ClientRepositoryInMemory()
const repository = new ClientRepositoryDatabase()
const clientController = new ClientController(repository)
const clientListController = new ClientListController(repository)
const clientGetNameController = new ClientGetNameController(repository)
const clientRemoveClientController = new ClientRemoveController(repository)
const clientGetByIdController = new ClientGetByIdController(repository)
const clientUpdateByIdController = new ClientUpdateByIdController(repository)

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


router.get('/test', (req: Request, res: Response) => {
    res.send('Server is up and running');
  });

export {router} 