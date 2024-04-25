import { NextFunction, Request, Response } from "express";
import { BaseException } from "src/exceptions/base.exception";

export const exceptionHandlerMiddleware = (
    error: Error & Partial<BaseException>,
    req: Request,
    res: Response,
    next: NextFunction,
): Response => {
    const statusCode = error.statusCode ? error.statusCode : 500;

    const message = error.statusCode ? error.message : "Internal Server Error";

    return res.status(statusCode).json({
        error: error.name,
        message,
    });
};
