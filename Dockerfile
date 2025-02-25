# Layer 1
FROM node:lts-alpine AS builder
WORKDIR /app
COPY ./app/package.json ./
RUN npm install -g npm@latest
RUN npm install
COPY ./app/ ./
RUN npm run build

# Layer 2
FROM debian:bookworm-slim

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y \
    nginx \
    curl \
    gettext \
    && apt-get clean

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g pm2

WORKDIR /app

COPY ./api/index.js /app/api/index.js
COPY ./api/package.json /app/api/
RUN npm install

COPY --from=builder ./app/dist /var/www/html
COPY ./default.conf /etc/nginx/sites-available/default

RUN echo "API_PORT=3000" >> /app/.env

EXPOSE 80

COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
