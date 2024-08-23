FROM node:20 AS builder

WORKDIR /app

COPY . .

FROM nginx:alpine

COPY --from=builder /app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]