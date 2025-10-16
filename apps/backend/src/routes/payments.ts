import { Router } from 'express';
import { z } from 'zod';

export const router = Router();

const webhookSchema = z.object({
  type: z.string(),
  data: z.any(),
});

router.post('/stripe/webhook', (req, res) => {
  const parsed = webhookSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'invalid payload' });
  // TODO: verify signature with STRIPE_SECRET
  res.json({ received: true });
});

router.post('/flutterwave/webhook', (req, res) => {
  const parsed = webhookSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'invalid payload' });
  // TODO: verify signature with FLW_SECRET
  res.json({ received: true });
});
