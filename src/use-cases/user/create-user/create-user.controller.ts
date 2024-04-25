import { Request, Response } from "express";
import { IController } from "../../../interfaces/IController";
import { CreateUserService } from "./create-user.service";
import { UserEntity } from "src/entity/UserEntity";
import { UserResponse } from "../responses/UserResponse";

export class CreateUserController implements IController {
    // Instanciar diretamente aqui estava retornando "undefined" no método "handle", por
    // algum motivo...
    private createUserService: CreateUserService;

    async handle(req: Request, res: Response): Promise<Response<UserResponse>> {
        this.createUserService = new CreateUserService();

        const { fullName, email, password }: UserEntity = req.body;

        const createdUser = await this.createUserService.execute({
            fullName,
            email,
            password,
        });

        return res.json(createdUser);
    }
}
