FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma.config.ts ./
COPY src ./src/

RUN npm install

RUN DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy" npx prisma generate

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && node server.js"]