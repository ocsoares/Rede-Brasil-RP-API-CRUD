import { UserEntity } from "../../../entity/UserEntity";
import { IService } from "../../../interfaces/IService";
import { UserResponse } from "../../../use-cases/user/responses/UserResponse";
import { PrismaUserRepository } from "../../../repositories/implementations/prisma/user/PrismaUserRepository";
import { UserAlreadyExistsByEmailException } from "../../../exceptions/user/user-already-exists-by-email.exception";
import { BcryptHasher } from "../../../security/password/BcryptHasher";
import { UserMapper } from "../mapper/UserMapper";

export class CreateUserService implements IService<UserEntity, UserResponse> {
    private readonly prismaUserRepository = new PrismaUserRepository();

    async execute(user: UserEntity): Promise<UserResponse> {
        const userAlreadyExists = await this.prismaUserRepository.findByEmail(
            user.email,
        );

        if (userAlreadyExists) {
            throw new UserAlreadyExistsByEmailException();
        }

        const hashedPassword = await BcryptHasher.hash(user.password);

        const userWithHashedPassword = new UserEntity(
            user.fullName,
            user.email,
            hashedPassword,
        );

        const createdUser = await this.prismaUserRepository.create(
            userWithHashedPassword,
        );

        return UserMapper.toResponse(createdUser);
    }
}
