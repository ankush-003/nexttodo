FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
COPY prisma ./prisma
RUN npx prisma generate
EXPOSE 3000
ENV DATABASE_URL="postgresql://ankush:Ss-MuRgBoKUcbaC_uRM0Dw@ankush-db-5136.8nk.cockroachlabs.cloud:26257/nexttodo?sslmode=verify-full"
CMD ["npm", "run", "dev"]