FROM node
WORKDIR /root/
COPY . .
RUN npm install
RUN npm run build
CMD npm run serve
