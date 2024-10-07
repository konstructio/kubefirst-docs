FROM node:20-alpine3.17 AS builder

WORKDIR /app

COPY package*.json .

RUN npm ci 

COPY . .

RUN npm run build

FROM ghcr.io/patrickdappollonio/docker-http-server:v2.4.0

WORKDIR /html

COPY --from=builder /app/build/ .

ENV PORT=80

ENTRYPOINT ["/http-server"]

CMD ["--pathprefix=/docs/", "--disable-directory-listing"]
