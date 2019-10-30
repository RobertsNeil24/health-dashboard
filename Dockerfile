FROM node:10.17.0-buster

RUN apt-get update --yes

RUN mkdir /home/node/app

RUN chown -R node:node /home/node
RUN chown -R node:node /home/node/app
RUN chmod 755 /home/node/app

USER node

WORKDIR /home/node/app

COPY --chown=node:node . .

RUN npm install
RUN npm run build

WORKDIR /home/node/app/build


CMD npm install -g http-server && \
    npm run build && \
    cd build && \
    hs -p 3000; 

EXPOSE 3000