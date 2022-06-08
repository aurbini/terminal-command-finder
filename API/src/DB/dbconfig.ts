import { DataSource } from 'typeorm';
import { Git } from '../models/Git.model';
import * as dotenv from 'dotenv';
import { TypeDetail } from '../models/Type.model';
dotenv.config();

const appDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.LOCAL_DB_USER,
  password: process.env.LOCAL_DB_PASSWORD,
  database: process.env.OCAL_DB,
  entities: [Git, TypeDetail],
  logging: true,
  synchronize: true,
});

export default appDataSource;
