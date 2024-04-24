import { UserEntity } from '../../entity/UserEntity';

export abstract class UserRepository {
    abstract create(user: UserEntity): Promise<UserEntity>;
}
