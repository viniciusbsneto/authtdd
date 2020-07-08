import { Router } from 'express';

const routes = new Router();

// Rotas
routes.get('/', (req, res) => res.json({ message: 'Hello World!' }));

export default routes;
