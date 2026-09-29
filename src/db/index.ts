import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const connectionString = (typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.DATABASE_URL : process.env.DATABASE_URL);

if (!connectionString) {
  throw new Error('DATABASE_URL is not defined in your environment variables');
}

// Disable prepare as it is not supported for some connection poolers in "transaction" mode
const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client, { schema });
