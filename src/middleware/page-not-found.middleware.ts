import { Request, Response } from "express";

export const pageNotFoundMiddleware = (
    req: Request,
    res: Response,
): Response => {
    return res.status(404).json({
        message: "Page not found !",
    });
};
