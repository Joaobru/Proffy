import { Router } from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController'
import ClassesUser from './controllers/UsersController';

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const classesUser = new ClassesUser()

const routes = Router();

routes.post('/user', classesUser.create);

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;