FROM node:latest

MAINTAINER Sandeep <sandeep.p64@gmail.com>

WORKDIR /usr/src/app

COPY app .
COPY lib .
COPY pages .
COPY setup .
COPY *.ts .
COPY *.json .
COPY *.js .

RUN ls

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

