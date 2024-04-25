import { IService } from "../../../interfaces/IService";
import { PrismaUserRepository } from "../../../repositories/implementations/prisma/user/PrismaUserRepository";
import { UserResponse } from "../responses/UserResponse";
import { UserNotFoundByIdException } from "../../../exceptions/user/user-not-found-by-id.exception";
import { UserMapper } from "../mapper/UserMapper";

export class FindUserService implements IService<string, UserResponse> {
    private readonly prismaUserRepository = new PrismaUserRepository();

    async execute(id: string): Promise<UserResponse> {
        const userFoundById = await this.prismaUserRepository.findById(id);

        if (!userFoundById) {
            throw new UserNotFoundByIdException();
        }

        return UserMapper.toResponse(userFoundById);
    }
}
