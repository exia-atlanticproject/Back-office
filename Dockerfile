FROM node:latest as build

WORKDIR /app
COPY . /app

RUN npm i
RUN npm run build

FROM httpd:2.4

COPY --from=build /app/dist /usr/local/apache2/htdocs/
