import { Request, Response } from "express";
import { IController } from "../../../interfaces/IController";
import { DeleteUserService } from "./delete-user.service";

export class DeleteUserController implements IController {
    private deleteUserService: DeleteUserService;

    async handle(req: Request, res: Response): Promise<Response> {
        this.deleteUserService = new DeleteUserService();

        const { id } = req.params;

        await this.deleteUserService.execute(id);

        return res.status(204).end();
    }
}
