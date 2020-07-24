```shell script
$ export HYPERNOVA_BATCH=http://localhost:3000/batch
$ PORT=8000 ara run:proxy --config ./nova-proxy.json
$ curl -X POST http://localhost:8000/batch -d '
{
  "uuid": {
    "name": "Example",
    "data": {
      "title": "Ara Framework"
    }
  },
  "uuid-2": {
    "name": "Example",
    "data": {
      "title": "Ara Framework 2"
    }
  }
}'
$ PORT=3000 ara run:cluster --config ./views.json
$ curl -X POST http://localhost:3000/batch -d '
{
  "foo": {
    "name": "Foo",
    "data": {
      "title": "Ara Framework"
    }
  },
  "bar": {
    "name": "Bar",
    "data": {
      "title": "Ara Framework"
    }
  }
}'
```
