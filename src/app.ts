import cors from "cors";
import express, { Express, Request, Response } from "express";
import { swaggerJSON } from "./docs/swagger";
import { exceptionHandlerMiddleware } from "./middleware/exception-handler.middleware";
import morganMiddleware from "./middleware/morgan.middleware";
import * as swaggerUi from "swagger-ui-express";
import { pageNotFoundMiddleware } from "./middleware/page-not-found.middleware";
import "express-async-errors";
import helmet from "helmet";
import crudRoute from "./routes/crud.route";

const app: Express = express();

app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(morganMiddleware);

app.get("/", (req: Request, res: Response): void => {
    return res.redirect("/api/docs");
});

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerJSON));

app.use("/api/", crudRoute);

app.use(pageNotFoundMiddleware);

app.use(exceptionHandlerMiddleware);

export { app };
