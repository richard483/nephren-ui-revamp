FROM node:21-alpine

LABEL authors="Richard William"

ENV VITE_GOOGLE_TAG="__VITE_GOOGLE_TAG__"

ENV VITE_NEPHREN_BLOG="__VITE_NEPHREN_BLOG__"

WORKDIR /app

COPY package.json .

RUN npm install && npm i -g serve

COPY . .

RUN npm run build

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 7002

CMD ["/entrypoint.sh"]