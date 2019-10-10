import { Router } from 'express';

import ProjectController from './app/controllers/ProjectController';
import CountRequest from './app/middlewares/CountRequest';

const routes = new Router();

// Middleware to count how many requests we have so far
routes.use(CountRequest);

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.store);
routes.put('/projects/:id', ProjectController.update);
routes.delete('/projects/:id', ProjectController.delete);
routes.post('/projects/:id/tasks', ProjectController.storeTask);

export default routes;
