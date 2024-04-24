import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import { swaggerJSON } from './docs/swagger';
import {
    pageNotFound,
    errorAPIMiddleware,
} from './middleware/error-api.middleware';
import morganMiddleware from './middleware/morgan.middleware';
import * as swaggerUi from 'swagger-ui-express';

const app: Express = express();

app.use(express.json());

app.use(cors());

// Middlewares
app.use(morganMiddleware);

// Initial route (/) redirect to Documentation Route
app.get('/', (req: Request, res: Response): void => {
    return res.redirect('/api/docs');
});

// Documentation Route
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerJSON));

// Padroniza TODAS as Rotas para conter /api/... na URL !! <<
app.use(
    '/api/',
    // Rota exportada
);

app.use(pageNotFound);

// Para Funções ASSÍNCRONAS (async) PRECISA usar a lib 'express-async-errors' !! <<
app.use(errorAPIMiddleware);

export { app };
