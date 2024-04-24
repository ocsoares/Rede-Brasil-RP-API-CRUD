import { BaseException } from '../base.exception';

export class UserAlreadyExistsByEmailException extends BaseException {
    static readonly EXCEPTION_MESSAGE =
        'There is already a user registered with this email !';

    constructor() {
        super(UserAlreadyExistsByEmailException.EXCEPTION_MESSAGE, 400);

        this.name = 'UserAlreadyExistsByEmailException';
    }
}
