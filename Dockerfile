FROM node:21-alpine

LABEL authors="Richard William"

WORKDIR /app

COPY package.json .

RUN npm install && npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]