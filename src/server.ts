import "dotenv/config";
import Logger from "./config/logs";
import { app } from "./app";
import { PrismaService } from "./repositories/implementations/prisma/prisma-client.service";

const host = process.env.HOST_URL ?? "localhost";
const port = process.env.HOST_PORT ?? 3000;

app.listen(port, async () => {
    await PrismaService.connect();

    Logger.info(`Servidor rodando remotamente em ${host}:${port}`);

    process.env.NODE_ENV
        ? console.log(`Servidor rodando em produção na porta ${port} !`)
        : "";
});

app.on("close", async () => {
    await PrismaService.disconnect();
});
