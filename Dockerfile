FROM node
WORKDIR /root/
COPY ["package.json", "package-lock.json", "./"]
RUN ["npm", "install"]
COPY ["webpack.config.js", "./"]
COPY ["src/", "./src/"]
RUN ["npm", "run", "build"]
CMD ["node", "/root/node_modules/.bin/http-server" , "./dist/"]

