FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm && pnpm install || true
COPY . .
RUN pnpm install --frozen-lockfile || true && pnpm build || true
EXPOSE 4000
CMD ["pnpm", "dev"]
