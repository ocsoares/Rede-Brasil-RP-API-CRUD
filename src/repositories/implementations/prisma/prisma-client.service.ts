import { PrismaClient } from '@prisma/client';

export class PrismaService {
    private static readonly prismaClient = new PrismaClient();

    static async connect(): Promise<void> {
        await this.prismaClient.$connect();
    }

    static async disconnect(): Promise<void> {
        await this.prismaClient.$disconnect();
    }

    static getClient(): PrismaClient {
        return this.prismaClient;
    }
}
