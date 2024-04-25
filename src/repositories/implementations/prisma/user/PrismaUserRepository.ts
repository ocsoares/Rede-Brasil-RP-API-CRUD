import { UserRepository } from "../../../abstracts/UserRepository";
import { PrismaService } from "../prisma-client.service";
import { UserEntity } from "../../../../entity/UserEntity";

export class PrismaUserRepository implements UserRepository {
    private readonly prismaService = PrismaService.getClient();

    async create(data: UserEntity): Promise<UserEntity> {
        const createUser = await this.prismaService.user.create({ data });

        return createUser;
    }

    async findByEmail(email: string): Promise<UserEntity | null> {
        const userFound = await this.prismaService.user.findUnique({
            where: { email },
        });

        return userFound;
    }

    async findById(id: string): Promise<UserEntity | null> {
        const userFound = await this.prismaService.user.findUnique({
            where: { id },
        });

        return userFound;
    }

    async findAll(): Promise<UserEntity[]> {
        const usersFound = await this.prismaService.user.findMany();

        return usersFound;
    }
}
