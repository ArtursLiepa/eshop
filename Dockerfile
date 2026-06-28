# syntax=docker/dockerfile:1

# Development file
# ARG NODE_VERSION=22.14.0

# FROM node:${NODE_VERSION}-alpine

# WORKDIR /app

# COPY package*.json ./

# RUN npm install -g @angular/cli
# RUN npm install

# ENV PATH=/usr/local/lib/node_modules/.bin:$PATH

# COPY . .

# EXPOSE 4200

# CMD ["ng", "serve", "--host", "0.0.0.0"]

# Production file
ARG NODE_VERSION=22.14.0
FROM node:${NODE_VERSION}-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/web/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]