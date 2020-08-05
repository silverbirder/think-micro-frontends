FROM mhart/alpine-node:8
RUN apk add --no-cache make gcc g++ python
RUN mkdir /app
WORKDIR /app
COPY . /app/
RUN npm i
EXPOSE 7001