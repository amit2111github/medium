import { Pool } from 'pg';

export const pool = new Pool({
  password: 'password',
  user: 'postgres',
  port: 5432,
  database: 'd1',
  host: 'localhost',
});
