FROM node:lts-alpine
WORKDIR /app
RUN npm install -g pm2
COPY package*.json ./
RUN npm install
COPY . .
COPY prisma ./prisma
RUN npx prisma generate
RUN npm run build
EXPOSE 3000
ENV DATABASE_URL="postgresql://ankush:Ss-MuRgBoKUcbaC_uRM0Dw@ankush-db-5136.8nk.cockroachlabs.cloud:26257/nexttodo?sslmode=verify-full"
CMD ["pm2-runtime", "start", "npm", "--", "start"]