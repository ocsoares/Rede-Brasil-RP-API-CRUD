import { IService } from '../../../interfaces/IService';

export class CreateUserService implements IService<any, any> {
    async execute(parameter: any): Promise<any> {
        console.log(parameter);
        throw new Error('Method not implemented.');
    }
}
