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

FROM node:21-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]