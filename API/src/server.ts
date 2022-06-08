import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import appDataSource from './DB/dbconfig';
import baseRouter from './routes';

class Server {
  private app;

  constructor() {
    this.app = express();
    this.config();
    this.routerConfig();
    this.dbConnect();
  }

  private config() {
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json({ limit: '1mb' })); // 100kb default
  }

  private dbConnect() {
    appDataSource
      .initialize()
      .then(async () => {
        this.seed();
        console.log(`Database connection established`);
      })
      .catch((error) => console.log(error));
  }

  private routerConfig() {
    this.app.use('/', baseRouter);
  }

  public start = (port: number) => {
    return new Promise((resolve, reject) => {
      this.app
        .listen(port, () => {
          resolve(port);
        })
        .on('error', (err: Object) => reject(err));
    });
  };
  seed() {}
}

export default Server;
