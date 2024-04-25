import { IService } from "../../../interfaces/IService";
import { UserResponse } from "../responses/UserResponse";
import { PrismaUserRepository } from "../../../repositories/implementations/prisma/user/PrismaUserRepository";
import { UserMapper } from "../mapper/UserMapper";

export class FindAllUsersService implements IService<null, UserResponse[]> {
    private readonly prismaUserRepository = new PrismaUserRepository();

    async execute(): Promise<UserResponse[]> {
        const allUsersFound = await this.prismaUserRepository.findAll();

        return UserMapper.toResponseList(allUsersFound);
    }
}
