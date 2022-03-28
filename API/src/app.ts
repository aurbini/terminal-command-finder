import express, { Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';
import routes from './routes';

function handleError(err: any, __, res: Response, _next: NextFunction) {
  res.status(err.statusCode || 500).send(err.message);
}

const app = express();

app.use(bodyParser.json());

app.use('/', routes);

app.use(handleError);

export default app;
