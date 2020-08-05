FROM mhart/alpine-node:8
RUN apk add --no-cache make gcc g++ python
RUN mkdir /proxy
WORKDIR /proxy
COPY . /proxy/
RUN npm i
EXPOSE 7000
