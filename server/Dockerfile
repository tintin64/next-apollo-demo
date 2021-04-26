FROM node:latest

MAINTAINER Sandeep <sandeep.p64@gmail.com>

WORKDIR /usr/src/app

COPY apollo-server .
COPY *.json .
COPY *.js .

RUN npm install

EXPOSE 5000

CMD ["npm", "start"]