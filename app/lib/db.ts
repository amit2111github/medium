import { Pool } from 'pg';

export const pool = new Pool({
  password: process.env.NEXT_PUBLIC_PASSWORD,
  user: process.env.NEXT_PUBLIC_USER,
  port: Number(process.env.NEXT_PUBLIC_PORT),
  database: process.env.NEXT_PUBLIC_DATABASE,
  host: process.env.NEXT_PUBLIC_HOST,
});
