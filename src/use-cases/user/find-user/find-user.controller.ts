import { Request, Response } from "express";
import { IController } from "../../../interfaces/IController";
import { UserResponse } from "../responses/UserResponse";
import { FindUserService } from "./find-user.service";

export class FindUserController implements IController {
    private findUserService: FindUserService;

    async handle(req: Request, res: Response): Promise<Response<UserResponse>> {
        this.findUserService = new FindUserService();

        const { id } = req.params;

        const userFound = await this.findUserService.execute(id);

        return res.json(userFound);
    }
}
