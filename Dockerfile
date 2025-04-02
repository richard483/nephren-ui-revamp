# FROM node:21-alpine

# RUN apk add --no-cache bash

# LABEL authors="Richard William"

# WORKDIR /app

# COPY package.json .

# RUN npm install && npm i -g serve

# COPY . .

# RUN npm run build

# EXPOSE 7002

# CMD [ "serve", "-s", "dist", "-l", "7002"]

FROM node:21-alpine AS builder

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

COPY --from=builder /app/dist /usr/share/nginx/html

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 7002

ENTRYPOINT ["/entrypoint.sh"]