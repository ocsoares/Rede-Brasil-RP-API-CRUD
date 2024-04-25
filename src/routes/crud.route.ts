import { Router } from "express";
import { createUserValidation } from "../middleware/user/create-user.validation";
import { handleValidation } from "../middleware/handle.validation";
import { CreateUserController } from "../use-cases/user/create-user/create-user.controller";
import { FindUserController } from "../use-cases/user/find-user/find-user.controller";

const crudRoute: Router = Router();

const createUserController = new CreateUserController();
const findUserController = new FindUserController();

crudRoute.post(
    "/user",
    createUserValidation(),
    handleValidation,
    createUserController.handle,
);

crudRoute.get("/user/:id", findUserController.handle);

export default crudRoute;
