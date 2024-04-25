import { Router } from "express";
import { exampleValidation } from "../middleware/example.validation";
import { handleValidation } from "../middleware/handle.validation";
import { CreateUserController } from "../use-cases/user/create-user/create-user.controller";

const crudRoute: Router = Router();
const createUserController = new CreateUserController();

crudRoute.post(
    "/user",
    exampleValidation(),
    handleValidation,
    createUserController.handle,
);

export default crudRoute;
