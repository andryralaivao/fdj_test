ARG NODE_VERSION=18

FROM node:${NODE_VERSION}-alpine as fdj_backend_dev

EXPOSE 3000

RUN mkdir /app
RUN chown -R node:node /app

WORKDIR /app

USER node

COPY package.json yarn*.json ./
RUN ["yarn", "install"]

COPY bin routes app.js ./

ENTRYPOINT ["yarn", "dev"]
