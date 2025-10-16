import { Router } from 'express';
import { getDb } from '../db.js';
import { User } from '../models.js';

export const router = Router();

router.get('/me', async (_req, res) => {
  const db = await getDb();
  const user = await db.collection<User>('users').findOne({ email: 'test@example.com' });
  if (!user) return res.status(404).json({ error: 'not found' });
  res.json(user);
});

router.post('/login', async (req, res) => {
  const { email, type } = req.body as Partial<User>;
  if (!email || !type) return res.status(400).json({ error: 'email and type required' });
  const db = await getDb();
  const existing = await db.collection<User>('users').findOne({ email });
  if (existing) return res.json(existing);
  const doc: User = { email, type, followers: 12000, engagementRate: 0.045, platforms: ['instagram', 'tiktok'], niches: ['fashion'] };
  const result = await db.collection<User>('users').insertOne(doc as any);
  res.status(201).json({ ...doc, _id: result.insertedId.toString() });
});
