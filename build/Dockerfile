FROM node
RUN apt-get update && apt-get install -y build-essential libpq-dev libkrb5-dev

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm install
RUN npm install nodemon -g

CMD npm start
