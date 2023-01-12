ARG NODE_VERSION=18

FROM node:${NODE_VERSION}-alpine AS fdj_frontend_dev

EXPOSE 4200

WORKDIR /app

RUN chown -R node:node ./
USER node

COPY package*.json yarn*.lock ./
RUN ["yarn", "install"]

COPY . ./
CMD ["yarn", "dev"]
