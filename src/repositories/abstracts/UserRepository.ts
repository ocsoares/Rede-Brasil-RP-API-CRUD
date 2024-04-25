import { UserEntity } from "../../entity/UserEntity";

export abstract class UserRepository {
    abstract create(user: UserEntity): Promise<UserEntity>;
    abstract findByEmail(email: string): Promise<UserEntity | null>;
    abstract findById(id: string): Promise<UserEntity | null>;
    abstract findAll(): Promise<UserEntity[]>;
    abstract deleteById(id: string): Promise<void>;
}
