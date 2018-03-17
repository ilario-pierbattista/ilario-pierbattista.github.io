FROM node:8-alpine

RUN yarn global add \
    http-server

USER node
WORKDIR /node