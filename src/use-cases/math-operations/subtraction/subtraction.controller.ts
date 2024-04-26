import { IController } from "src/interfaces/IController";
import { Request, Response } from "express";
import { IMathOperation } from "../../../interfaces/IMathOperation";
import { SubtractionService } from "./subtraction.service";

export class SubtractionController implements IController {
    private subtractionService: SubtractionService;

    async handle(req: Request, res: Response): Promise<Response> {
        this.subtractionService = new SubtractionService();

        const { number, otherNumber }: IMathOperation = req.body;

        const result = await this.subtractionService.execute(
            number,
            otherNumber,
        );

        return res.json({ result });
    }
}
