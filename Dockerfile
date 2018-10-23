FROM node
WORKDIR /root/
COPY . .
RUN ["npm", "install"]
RUN ["npm", "run", "build"]
CMD ["node", "/root/node_modules/.bin/http-server" , "./dist/"]

