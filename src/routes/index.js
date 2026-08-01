import express from 'express';
import userRoutes from './userRoute.js';


const routes = express();

routes.use('/users', userRoutes);

export default routes;
