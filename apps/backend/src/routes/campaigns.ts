import { Router } from 'express';
import { getDb } from '../db.js';
import { Campaign } from '../models.js';

export const router = Router();

router.get('/', async (_req, res) => {
  const db = await getDb();
  const items = await db.collection<Campaign>('campaigns').find({}).limit(50).toArray();
  res.json(items);
});

router.post('/', async (req, res) => {
  const db = await getDb();
  const data = req.body as Campaign;
  if (!data?.name || !data?.budget) return res.status(400).json({ error: 'name and budget required' });
  const result = await db.collection<Campaign>('campaigns').insertOne(data as any);
  res.status(201).json({ ...data, _id: result.insertedId.toString() });
});

router.post('/:id/apply', async (req, res) => {
  const { id } = req.params;
  const db = await getDb();
  await db.collection('applications').insertOne({ campaignId: id, userEmail: 'test@example.com', status: 'applied', createdAt: new Date() });
  res.json({ id, status: 'applied' });
});
