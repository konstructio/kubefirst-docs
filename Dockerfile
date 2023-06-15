FROM node AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx AS runner 

WORKDIR /usr/share/nginx/html

ENV NODE_ENV production

COPY --from=builder /app/build/ .

EXPOSE 80

ENV PORT 80

CMD ["nginx", "-g", "daemon off;"]
