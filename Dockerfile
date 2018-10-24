FROM node as builder
WORKDIR /root/
COPY ["package.json", "package-lock.json", "./"]
RUN ["npm", "install"]
COPY ["webpack.config.js", "./"]
COPY ["src/", "./src/"]
RUN ["npm", "run", "build"]
RUN ["/bin/bash", "-c", "find . ! -name dist ! -name node_modules -maxdepth 1 -mindepth 1 -exec rm -rf {} \\;"]

FROM node
WORKDIR /root/
COPY --from=builder /root/ ./
CMD ["node", "/root/node_modules/.bin/http-server" , "./dist/"]

