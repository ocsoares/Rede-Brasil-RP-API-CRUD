import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { StatusCodes } from 'http-status-codes';

export const handleValidation = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next();
    }

    const getErrors: object[] = [];

    // VER se isso aqui tá funcionando IGUAL ao de Baixo !!!
    errors.array().map((error) => getErrors.push([error.msg]));

    // errors.array().map((error) => getErrors.push({ [error.param]: error.msg }));

    return res.status(StatusCodes.BAD_REQUEST).json({
        errors: getErrors,
    });
};
