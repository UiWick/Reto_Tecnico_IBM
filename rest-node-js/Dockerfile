FROM node:9-slim
WORKDIR /rest-node-js
COPY package.json /rest-node-js
RUN npm install
COPY . /rest-node-js
CMD ["npm","start"]