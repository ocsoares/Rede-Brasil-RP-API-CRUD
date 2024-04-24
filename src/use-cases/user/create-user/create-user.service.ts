import { IService } from '../../../interfaces/IService';

export class CreateUserService implements IService<any, any> {
    async execute(parameter: any): Promise<any> {
        throw new Error('Method not implemented.');
    }
}
