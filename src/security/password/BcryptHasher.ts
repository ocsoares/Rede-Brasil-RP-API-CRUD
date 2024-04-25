import bcrypt from "bcrypt";

export class BcryptHasher {
    static async hash(plainPassword: string, salt = 10): Promise<string> {
        return await bcrypt.hash(plainPassword, salt);
    }

    static async compare(
        plainPassword: string,
        hashedPassword: string,
    ): Promise<boolean> {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }
}
