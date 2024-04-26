import { Router } from "express";
import { handleValidation } from "../middleware/handle.validation";
import { mathOperationValidation } from "../middleware/math-operation/math-operation.validation";
import { SumController } from "../use-cases/math-operations/sum/sum.controller";
import { MultiplicationController } from "../use-cases/math-operations/multiplication/multiplication.controller";
import { SubtractionController } from "../use-cases/math-operations/subtraction/subtraction.controller";

const mathOperationRoute: Router = Router();

const sumController = new SumController();
const multiplicationController = new MultiplicationController();
const subtractionController = new SubtractionController();

mathOperationRoute.post(
    "/sum",
    mathOperationValidation(),
    handleValidation,
    sumController.handle,
);

mathOperationRoute.post(
    "/multiplication",
    mathOperationValidation(),
    handleValidation,
    multiplicationController.handle,
);

mathOperationRoute.post(
    "/subtraction",
    mathOperationValidation(),
    handleValidation,
    subtractionController.handle,
);

export default mathOperationRoute;
