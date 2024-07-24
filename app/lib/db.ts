import { Pool } from 'pg';

export const pool = new Pool({
  password: 'password',
  user: 'postgres',
  port: 7000,
  database: 'd1',
  host: 'localhost',
});
