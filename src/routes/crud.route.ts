import { Router } from "express";
import { createUserValidation } from "../middleware/user/create-user.validation";
import { handleValidation } from "../middleware/handle.validation";
import { CreateUserController } from "../use-cases/user/create-user/create-user.controller";

const crudRoute: Router = Router();
const createUserController = new CreateUserController();

crudRoute.post(
    "/user",
    createUserValidation(),
    handleValidation,
    createUserController.handle,
);

export default crudRoute;
