import { Router } from 'express';

import ProjectController from './app/controllers/ProjectController';

const routes = new Router();

routes.get('/projects', ProjectController.index);

export default routes;
