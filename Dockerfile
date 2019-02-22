FROM alpine:3.1

# Update
RUN apk add --update nodejs

# Install app dependencies
COPY package.json /src/package.json
RUN cd /; npm install

# Bundle app source
COPY . /

EXPOSE  8080
CMD ["node", "index.js"]