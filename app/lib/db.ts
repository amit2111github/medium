import { Pool } from 'pg';

export const pool = new Pool({
  password: process.env.PASSWORD,
  user: process.env.USER,
  port: Number(process.env.PORT),
  database: process.env.DATABASE,
  host: process.env.HOST,
});
