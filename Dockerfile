FROM node:19-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install --silent
RUN npm install react-scripts --silent
RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build/ .

ENTRYPOINT ["nginx", "-g", "daemon off;"]