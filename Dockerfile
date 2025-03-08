# ---- Stage 1: Build ----
  FROM node:latest AS builder
  WORKDIR /app
  
  COPY package*.json ./
  RUN npm install
  
  COPY . .
  
  RUN npm run build
  
  # ---- Stage 2: Production ----
  FROM node:latest AS runner
  WORKDIR /app
  
  ENV NODE_ENV=production
  
  COPY --from=builder /app/package*.json ./
  COPY --from=builder /app/node_modules ./node_modules
  COPY --from=builder /app/.next ./.next
  COPY --from=builder /app/public ./public
  COPY --from=builder /app/README.md ./README.md
  COPY --from=builder /app/cypress ./cypress
  
  EXPOSE 3000
  
  CMD ["npm", "start"]
  