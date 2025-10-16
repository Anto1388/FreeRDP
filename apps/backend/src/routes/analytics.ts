import { Router } from 'express';

export const router = Router();

router.get('/summary', async (_req, res) => {
  // In a real app, we would fetch from AI service and databases
  try {
    const ai = await fetch('http://localhost:8000/health').then(r => r.json());
    res.json({ engagementRate: 0.045, followers: 12000, growth30d: 0.12, ai });
  } catch {
    res.json({ engagementRate: 0.045, followers: 12000, growth30d: 0.12, ai: { ok: false } });
  }
});
