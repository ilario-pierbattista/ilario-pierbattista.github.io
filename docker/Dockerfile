FROM node:8-alpine

RUN apk add --no-cache zsh git

RUN yarn global add \
    http-server

USER node

RUN git clone https://github.com/robbyrussell/oh-my-zsh /home/node/.oh-my-zsh
COPY conf/.zshrc /home/node/.zshrc

WORKDIR /node