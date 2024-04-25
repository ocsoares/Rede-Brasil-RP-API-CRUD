import { IServiceTwoParameters } from "../../../interfaces/IServiceTwoParameters";

export class SumService
    implements IServiceTwoParameters<number, number, number>
{
    async execute(number: number, otherNumber: number): Promise<number> {
        return number + otherNumber;
    }
}
