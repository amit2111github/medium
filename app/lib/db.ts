import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.NEXT_PUBLIC_DATABASE,
  ssl: {
    rejectUnauthorized: false, // Set to true in production for security
  },
});
