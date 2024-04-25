import { UserEntity } from "../../entity/UserEntity";

export abstract class UserRepository {
    abstract create(user: UserEntity): Promise<UserEntity>;
    abstract findByEmail(email: string): Promise<UserEntity | null>;
}
