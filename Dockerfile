FROM node:21-alpine

RUN apk add --no-cache bash

LABEL authors="Richard William"

ARG VITE_GOOGLE_TAG

ARG VITE_NEPHREN_BLOG

ENV VITE_GOOGLE_TAG=$VITE_GOOGLE_TAG

ENV VITE_NEPHREN_BLOG=$VITE_NEPHREN_BLOG

WORKDIR /app

COPY package.json .

RUN npm install && npm i -g serve

COPY . .

RUN npm run build

EXPOSE 7002

CMD [ "serve", "-s", "dist", "-l", "7002"]