FROM node:20-alpine3.17 AS builder

WORKDIR /app

COPY . .

RUN npm install \
&& npm run build

FROM nginx:1.25.1-alpine AS runner

WORKDIR /usr/share/nginx/docs

ENV NODE_ENV production

COPY --from=builder /app/build/ .

COPY default.conf /etc/nginx/conf.d/

EXPOSE 80

ENV PORT 80

CMD ["nginx", "-g", "daemon off;"]
