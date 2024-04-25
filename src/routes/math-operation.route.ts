import { Router } from "express";
import { handleValidation } from "../middleware/handle.validation";
import { mathOperationValidation } from "../middleware/math-operation/math-operation.validation";
import { SumController } from "../use-cases/math-operations/sum/sum.controller";

const mathOperationRoute: Router = Router();

const sumController = new SumController();

mathOperationRoute.post(
    "/sum",
    mathOperationValidation(),
    handleValidation,
    sumController.handle,
);

export default mathOperationRoute;
