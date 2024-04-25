import { body } from "express-validator";

export const updateUserValidation = () => {
    return [
        body("fullName").isString().withMessage("Insira um fullName válido"),
        body("email").isEmail().withMessage("Insira um nome email válido"),
        body("password").isString().withMessage("Insira um password válido"),
    ];
};
