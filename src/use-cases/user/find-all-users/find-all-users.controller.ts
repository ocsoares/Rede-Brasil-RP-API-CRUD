import { Request, Response } from "express";
import { IController } from "../../../interfaces/IController";
import { FindAllUsersService } from "./find-all-users.service";

export class FindAllUsersController implements IController {
    private findAllUsersService: FindAllUsersService;

    async handle(req: Request, res: Response): Promise<Response> {
        this.findAllUsersService = new FindAllUsersService();

        const allUsersFound = await this.findAllUsersService.execute();

        return res.json(allUsersFound);
    }
}
