FROM node:21-alpine

LABEL authors="Richard William"

WORKDIR /app

COPY package.json .

RUN npm install && npm i -g serve

COPY . .

RUN npm run build

EXPOSE 7002

CMD [ "serve", "-s", "dist", "-l", "7002"]