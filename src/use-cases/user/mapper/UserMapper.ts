import { UserEntity } from "../../../entity/UserEntity";
import { UserResponse } from "../../../use-cases/user/responses/UserResponse";

export class UserMapper {
    static toResponse(userEntity: UserEntity): UserResponse {
        return new UserResponse(userEntity.fullName, userEntity.email);
    }

    static toResponseList(userEntityArray: UserEntity[]): UserResponse[] {
        return userEntityArray.map((user) => this.toResponse(user));
    }
}
