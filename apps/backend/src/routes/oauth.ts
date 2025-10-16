import { Router } from 'express';

export const router = Router();

router.get('/tiktok', (_req, res) => {
  res.json({ url: 'https://www.tiktok.com/auth/authorize?client_id=...' });
});

router.get('/instagram', (_req, res) => {
  res.json({ url: 'https://api.instagram.com/oauth/authorize?client_id=...' });
});

router.get('/youtube', (_req, res) => {
  res.json({ url: 'https://accounts.google.com/o/oauth2/v2/auth?client_id=...' });
});

router.get('/x', (_req, res) => {
  res.json({ url: 'https://api.twitter.com/oauth2/authorize?client_id=...' });
});
