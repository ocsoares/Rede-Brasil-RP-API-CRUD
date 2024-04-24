import { Request, Response, NextFunction } from 'express';

export interface IController<R> {
    handle(req: Request, res: Response, next: NextFunction): Promise<R>;
}
