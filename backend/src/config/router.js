import { Router } from 'express';
import userRoutes from '../routes/userRoutes.js';

const routes = Router();
const unProtectedRouter = Router();

unProtectedRouter.use('/users', userRoutes);
routes.use('/api', unProtectedRouter);

export default routes;
