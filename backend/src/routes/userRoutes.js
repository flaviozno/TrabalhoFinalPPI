import { Router } from "express";
import UserController from "../controllers/UserController.js";

const routes = Router();
const usersRoutes = Router();

usersRoutes.post("/users", UserController.create);

routes.use(usersRoutes);

export default routes;
