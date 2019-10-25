FROM node:10.17.0-buster

RUN apt-get update --yes

RUN mkdir /home/node/app

RUN chown -R node:node /home/node
RUN chown -R node:node /home/node/app
RUN chmod 755 /home/node/app

USER node

WORKDIR /home/node/app

COPY --chown=node:node . .

RUN rm -rf node_modules && npm install
RUN npm install --production

EXPOSE 3200
CMD ["npm", "start"]