import { IController } from "src/interfaces/IController";
import { Request, Response } from "express";
import { IMathOperation } from "../../../interfaces/IMathOperation";
import { DivisionService } from "./division.service";

export class DivisionController implements IController {
    private divisionService: DivisionService;

    async handle(req: Request, res: Response): Promise<Response> {
        this.divisionService = new DivisionService();

        const { number, otherNumber }: IMathOperation = req.body;

        const result = await this.divisionService.execute(number, otherNumber);

        return res.json({ result });
    }
}
