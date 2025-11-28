# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.14.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli
RUN npm install

ENV PATH=/usr/local/lib/node_modules/.bin:$PATH

COPY . .

EXPOSE 4200

# Run the application.
CMD ["ng", "serve", "--host", "0.0.0.0"]