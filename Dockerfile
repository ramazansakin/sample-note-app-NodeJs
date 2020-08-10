FROM node:alpine

LABEL author="Ramazan Sakin"

ENV PORT=3030

COPY . /var/www
WORKDIR /var/www

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]