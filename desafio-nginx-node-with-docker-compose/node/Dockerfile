FROM node:15

WORKDIR usr/src/app

RUN npm install mysql --save

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]