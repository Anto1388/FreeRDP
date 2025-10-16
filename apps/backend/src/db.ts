import { MongoClient, Db } from 'mongodb';

let client: MongoClient | null = null;
let db: Db | null = null;

export async function getDb(): Promise<Db> {
  if (db) return db;
  const url = process.env.MONGO_URL || 'mongodb://localhost:27017/yalipa';
  client = new MongoClient(url);
  await client.connect();
  db = client.db();
  return db;
}
