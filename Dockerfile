FROM node:21-alpine

RUN apk add --no-cache bash

LABEL authors="Richard William"

ENV VITE_GOOGLE_TAG="UA-00000000-0"

ENV VITE_NEPHREN_BLOG="is-it-overwritted?"

WORKDIR /app

COPY package.json .

RUN npm install && npm i -g serve

COPY . .

RUN npm run build

EXPOSE 7002

CMD [ "serve", "-s", "dist", "-l", "7002"]