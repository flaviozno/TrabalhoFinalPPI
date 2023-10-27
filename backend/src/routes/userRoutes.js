import { Router } from "express";
import UserController from "../controllers/UserController.js";

const routes = Router();
const usersRoutes = Router();

usersRoutes.get("/users", UserController.getAll);
usersRoutes.post("/users", UserController.create);

routes.use(usersRoutes);

export default routes;
