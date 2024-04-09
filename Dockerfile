# syntax=docker/dockerfile:1
# Stage 1
FROM node:20-alpine as builder
WORKDIR /home/node/app
COPY . .
RUN npm ci
RUN npm run build

# Stage 2
FROM nginx:1.25-alpine as server
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /home/node/app/build .
COPY nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]
