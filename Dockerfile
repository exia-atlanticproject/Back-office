FROM node:latest as build

ENV NODE_ENV="production"
WORKDIR /app
COPY . /app

RUN yarn
RUN npm run build

FROM httpd:2.4

COPY --from=build /app/dist /usr/local/apache2/htdocs/
