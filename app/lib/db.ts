import { Pool } from 'pg';
console.log(process.env.NEXT_PUBLIC_DATABASE, 'from db');
const pool = new Pool({
  connectionString: process.env.NEXT_PUBLIC_DATABASE,
  // Optionally, you can include other settings here
  ssl: {
    rejectUnauthorized: false, // Set to true in production for security
  },
});
