import 'reflect-metadata';

import app from './app';
import appDataSource from './DB/dbconfig';
import router from './routes/api/index';
import * as dotenv from 'dotenv';
dotenv.config();

appDataSource
  .initialize()
  .then(async () => {
    console.log(`Database connection established`);
  })
  .catch((error) => console.log(error));

app.use('/', router);

app.listen(process.env.APP_PORT, () => {
  console.log(`Listening on port ${process.env.APP_PORT}`);
});
