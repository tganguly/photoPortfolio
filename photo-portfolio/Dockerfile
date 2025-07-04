# ── shared base ───────────────────────────────────────
FROM node:20-alpine AS base
WORKDIR /app
ENV PATH="/app/node_modules/.bin:${PATH}"
COPY package*.json ./

# ── dev image (hot-reload) ────────────────────────────
FROM base AS dev
ENV NODE_ENV=development
RUN npm install                # dev + prod deps
CMD ["npm", "run", "dev"]      # 👈 exec-form array — no brackets in YAML

# ── builder ───────────────────────────────────────────
FROM base AS builder
ENV NODE_ENV=production
RUN npm ci --omit=dev
COPY . .
RUN npm run build && npm prune --production

# ── slim prod runtime ────────────────────────────────
FROM node:20-alpine AS prod
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "start"]
