FROM node
RUN apt-get update && apt-get install -y build-essential libpq-dev libkrb5-dev
RUN mkdir /app
WORKDIR /app
COPY . /app
COPY package.json /app/package.json
RUN npm install
RUN npm install nodemon -g
CMD nodemon index.js