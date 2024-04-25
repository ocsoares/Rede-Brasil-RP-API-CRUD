import { Request, Response } from "express";
import { IController } from "../../../interfaces/IController";
import { UpdateUserService } from "./update-user.service";
import { UserEntity } from "../../../entity/UserEntity";

export class UpdateUserController implements IController {
    private updateUserService: UpdateUserService;

    async handle(req: Request, res: Response): Promise<Response> {
        this.updateUserService = new UpdateUserService();

        const { id } = req.params;

        const { fullName, email, password }: UserEntity = req.body;

        await this.updateUserService.execute(id, { fullName, email, password });

        return res.status(204).end();
    }
}
