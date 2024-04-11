# latest LTS version
FROM node:20.12.2-alpine3.19

# To fine-tune the permissions on our application code in the container,
# let’s create the node_modules subdirectory in /home/node along with the app directory.
# Creating these directories will ensure that they have the permissions we want,
# which will be important when we create local node modules in the container with npm install.
# In addition to creating these directories, we will set ownership on them to our node user:

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app
COPY --chown=node:node package*.json .
USER node

RUN npm install

COPY --chown=node:node . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
