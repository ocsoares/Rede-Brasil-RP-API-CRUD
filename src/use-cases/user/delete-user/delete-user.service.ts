import { UserNotFoundByIdException } from "../../../exceptions/user/user-not-found-by-id.exception";
import { IService } from "../../../interfaces/IService";
import { PrismaUserRepository } from "../../../repositories/implementations/prisma/user/PrismaUserRepository";

export class DeleteUserService implements IService<string, void> {
    private readonly prismaUserRepository = new PrismaUserRepository();

    async execute(id: string): Promise<void> {
        const userFoundById = await this.prismaUserRepository.findById(id);

        if (!userFoundById) {
            throw new UserNotFoundByIdException();
        }

        return await this.prismaUserRepository.deleteById(id);
    }
}
