import { IController } from "src/interfaces/IController";
import { SumService } from "./sum.service";
import { Request, Response } from "express";
import { IMathOperation } from "../../../interfaces/IMathOperation";

export class SumController implements IController {
    private sumService: SumService;

    async handle(req: Request, res: Response): Promise<Response> {
        this.sumService = new SumService();

        const { number, otherNumber }: IMathOperation = req.body;

        const result = await this.sumService.execute(number, otherNumber);

        return res.json({ result });
    }
}
