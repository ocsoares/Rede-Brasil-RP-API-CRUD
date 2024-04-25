import { UserEntity } from "src/entity/UserEntity";
import { UserResponse } from "src/use-cases/user/responses/UserResponse";

export class UserMapper {
    toResponse(userEntity: UserEntity): UserResponse {
        return new UserResponse(userEntity.fullName, userEntity.email);
    }
}
