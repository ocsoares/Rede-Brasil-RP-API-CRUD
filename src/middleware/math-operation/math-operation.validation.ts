import { body } from "express-validator";

export const mathOperationValidation = () => {
    return [
        body("number")
            .exists()
            .withMessage("Insira um number válido !")
            .custom((value) => typeof value === "number")
            .withMessage("Insira um number válido !"),
        body("otherNumber")
            .custom((value) => typeof value === "number")
            .withMessage("Insira um otherNumber válido !"),
    ];
};
