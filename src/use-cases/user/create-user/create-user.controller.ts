import { Request, Response, NextFunction } from 'express';
import { IController } from '../../../interfaces/IController';

export class CreateUserController implements IController<any> {
    async handle(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<any> {
        throw new Error('Method not implemented.');
    }
}
