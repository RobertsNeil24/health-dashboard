FROM node:10.17.0-buster


ENV http_proxy 'http://bc-vip.intra.absa.co.za:8080'
ENV https_proxy 'http://bc-vip.intra.absa.co.za:8080'

EXPOSE 3000

RUN printenv
#RUN apt-get update --yes

RUN npm install -g http-server

RUN mkdir /home/node/app

RUN chown -R node:node /home/node
RUN chmod 755 /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node ./build .

USER node

CMD  hs -p 3000; 
