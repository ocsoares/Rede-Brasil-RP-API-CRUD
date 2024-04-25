import { BaseException } from "../base.exception";

export class UserNotFoundByIdException extends BaseException {
    static readonly EXCEPTION_MESSAGE =
        "The user with the provided ID does not exist";

    constructor() {
        super(UserNotFoundByIdException.EXCEPTION_MESSAGE, 400);

        this.name = "Bad Request";
    }
}
