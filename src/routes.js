import { Router } from 'express';

import CartsController from './controllers/CartsController';

const routes = new Router();

// routes.get('/transactions', ...) 
routes.get("/carts", CartsController.index)


export default routes;