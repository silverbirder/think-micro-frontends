FROM mhart/alpine-node:8
RUN apk add --no-cache make gcc g++ python
RUN mkdir /layout
WORKDIR /layout
COPY . /layout/
RUN npm i
EXPOSE 7003