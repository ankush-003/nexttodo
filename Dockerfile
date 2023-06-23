FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
COPY prisma ./prisma
RUN npx prisma generate
EXPOSE 3000
CMD ["npm", "run", "dev"]