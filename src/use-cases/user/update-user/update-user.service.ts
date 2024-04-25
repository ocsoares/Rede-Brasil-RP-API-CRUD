import { UserEntity } from "../../../entity/UserEntity";
import { UserNotFoundByIdException } from "../../../exceptions/user/user-not-found-by-id.exception";
import { IServiceTwoParameters } from "../../../interfaces/IServiceTwoParameters";
import { PrismaUserRepository } from "../../../repositories/implementations/prisma/user/PrismaUserRepository";
import { BcryptHasher } from "../../../security/password/BcryptHasher";

export class UpdateUserService
    implements IServiceTwoParameters<string, UserEntity, void>
{
    private readonly prismaUserRepository = new PrismaUserRepository();

    async execute(id: string, userEntity: UserEntity): Promise<void> {
        const userFoundById = await this.prismaUserRepository.findById(id);

        if (!userFoundById) {
            throw new UserNotFoundByIdException();
        }

        const hashedPassword = await BcryptHasher.hash(userEntity.password);

        const userWithHashedPassword = new UserEntity(
            userEntity.fullName,
            userEntity.email,
            hashedPassword,
        );

        return await this.prismaUserRepository.updateById(
            id,
            userWithHashedPassword,
        );
    }
}
