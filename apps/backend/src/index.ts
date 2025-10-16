import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { router as usersRouter } from './routes/users.js';
import { router as campaignsRouter } from './routes/campaigns.js';
import { router as analyticsRouter } from './routes/analytics.js';
import { router as paymentsRouter } from './routes/payments.js';
import { router as oauthRouter } from './routes/oauth.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const port = process.env.PORT ? Number(process.env.PORT) : 4000;

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.use('/api/users', usersRouter);
app.use('/api/campaigns', campaignsRouter);
app.use('/api/analytics', analyticsRouter);
app.use('/api/payments', paymentsRouter);
app.use('/api/oauth', oauthRouter);

app.listen(port, () => {
  console.log(`Backend API running on http://localhost:${port}`);
});
