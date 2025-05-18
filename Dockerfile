FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . ./

ENV REACT_APP_API_URL=WOOSANG_ENV_API_URL

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d

COPY ./env.sh /docker-entrypoint.d/env.sh

RUN chmod +x /docker-entrypoint.d/env.sh