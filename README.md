# Yalipa.com Monorepo

Apps:
- frontend (Next.js)
- backend (Express + TS)
- ai (FastAPI)

Infrastructure:
- docker-compose services and MongoDB

## Getting Started (Local)

Prereqs: Node 20+, pnpm, Python 3.11+, Docker (optional for compose)

1) Install deps at the root workspace (pnpm workspaces):

```bash
pnpm -w install
```

2) Dev servers (run in separate terminals):

```bash
pnpm dev:backend  # http://localhost:4000
```

```bash
cd apps/ai && uvicorn main:app --reload --port 8000  # http://localhost:8000
```

```bash
pnpm dev:frontend # http://localhost:3000
```

3) Using Docker Compose (optional):

```bash
docker compose up --build
```

## Environment Variables

- frontend: `NEXT_PUBLIC_API_BASE` (default http://localhost:4000)
- backend: `PORT`, `MONGO_URL`, `STRIPE_SECRET_KEY`, `FLW_SECRET_KEY`
- ai: `PORT`

Create `.env` files per app as needed. See `apps/frontend/.env.example`.

## Notes

- OAuth and payment integrations are stubbed; add real keys and flows.
- MongoDB collections: `users`, `campaigns`, `applications`.

