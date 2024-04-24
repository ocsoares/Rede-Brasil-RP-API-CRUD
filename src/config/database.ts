import 'dotenv/config';
import Logger from './logs';

// MUDAR esse DB, usar o PRISMA !!!
// OBS: MUDAR isso tudo, fazer uma Classe com "prisma" e "connect" algo assim, e deixar o NOME do Arquivo estilo CLASSE !!!!

const mongooseConnection = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.ATLAS_URL as string);
        Logger.info('Conectado com sucesso ao Atlas !');
    } catch (error: any) {
        Logger.error(error);
        Logger.error('Não foi possível conectar ao Atlas !');
        process.exit(1);
    }
};

export default mongooseConnection;
