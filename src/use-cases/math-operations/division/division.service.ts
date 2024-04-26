import { IServiceTwoParameters } from "../../../interfaces/IServiceTwoParameters";

export class DivisionService
    implements IServiceTwoParameters<number, number, number>
{
    async execute(number: number, otherNumber: number): Promise<number> {
        return number / otherNumber;
    }
}
