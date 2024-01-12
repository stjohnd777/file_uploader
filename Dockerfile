FROM node:alpine

LABEL author="Daniel St. John"

ENV PORT=3000

WORKDIR /var/wwww

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

EXPOSE $PORT

ENTRYPOINT [ "npm", "start" ]

 