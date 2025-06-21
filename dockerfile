FROM node:18

WORKDIR /app

# Copiar arquivos necessários para instalação
COPY package.json ./
COPY prisma ./prisma/

# Instalar dependências
RUN npm install

# Gerar Prisma Client
RUN npx prisma generate

COPY . .

CMD ["sh", "-c", "npx prisma generate && npm run start:dev"]