import { Pool } from 'pg';

const pool = new Pool({
  connectionString:
    'postgres://avnadmin:AVNS_XiOjmtci2zGVRfq8Vk7@pg-2ddd6520-amit-e988.g.aivencloud.com:13416/defaultdb?sslmode=require',
  // Optionally, you can include other settings here
  ssl: {
    rejectUnauthorized: false, // Set to true in production for security
  },
});
