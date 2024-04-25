import { IController } from "src/interfaces/IController";
import { Request, Response } from "express";
import { IMathOperation } from "../../../interfaces/IMathOperation";
import { MultiplicationService } from "./multiplication.service";

export class MultiplicationController implements IController {
    private multiplicationService: MultiplicationService;

    async handle(req: Request, res: Response): Promise<Response> {
        this.multiplicationService = new MultiplicationService();

        const { number, otherNumber }: IMathOperation = req.body;

        const result = await this.multiplicationService.execute(
            number,
            otherNumber,
        );

        return res.json({ result });
    }
}
