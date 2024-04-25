import { Router } from "express";
import { createUserValidation } from "../middleware/user/create-user.validation";
import { handleValidation } from "../middleware/handle.validation";
import { CreateUserController } from "../use-cases/user/create-user/create-user.controller";
import { FindUserController } from "../use-cases/user/find-user/find-user.controller";
import { FindAllUsersController } from "../use-cases/user/find-all-users/find-all-users.controller";
import { DeleteUserController } from "../use-cases/user/delete-user/delete-user.controller";
import { UpdateUserController } from "../use-cases/user/update-user/update-user.controller";
import { updateUserValidation } from "../middleware/user/update-user.validation";

const crudRoute: Router = Router();

const createUserController = new CreateUserController();
const findUserController = new FindUserController();
const findAllUsersController = new FindAllUsersController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();

crudRoute.post(
    "/user",
    createUserValidation(),
    handleValidation,
    createUserController.handle,
);

crudRoute.get("/user/:id", findUserController.handle);

crudRoute.get("/user", findAllUsersController.handle);

crudRoute.patch(
    "/user/:id",
    updateUserValidation(),
    handleValidation,
    updateUserController.handle,
);

crudRoute.delete("/user/:id", deleteUserController.handle);

export default crudRoute;
