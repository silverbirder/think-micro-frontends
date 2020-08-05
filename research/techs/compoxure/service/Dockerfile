FROM mhart/alpine-node:8
RUN apk add --no-cache make gcc g++ python
RUN mkdir /service
WORKDIR /service
COPY . /service/
RUN npm i
EXPOSE 7002
