# Example Service for Compoxure:

Middleware project: https://github.com/tes/compoxure

```
git clone git@github.com:tes/compoxure-example.git
cd compoxure-example
```

To run the demo:

```
docker-compose up
```

Then visit:  http://localhost:7000

## Explanation

`Proxy`: https://github.com/tes/compoxure-example/tree/master/proxy

This is the key folder with a Dockerfile that sets up a basic express server, loads configuration, and adds the compoxure middleware to express.  This is the service you will retain and will be key on the composition layer of your infrastructure.

`Proxy config`: https://github.com/tes/compoxure-example/blob/master/proxy/config

This is where you store the proxy configuration.  At Tes we keep all of the backend configuration in `default.json`, and only the things that change by environment in the `environment.json`.  This assumes you use `NODE_ENV=production`, if you use a different env variable to indicate your environments conflab supports this (we use TES_ENV).

`App`: https://github.com/tes/compoxure-example/tree/master/app

This folder contains a Dockerfile that sets up a super simple backend application (contains a page that has `cx-` markup). This is where your proxy will get its html from according to its rule, parse it and compose it from other services.  It only serves fragments of html with `cx-use-slot` directives, with the addition of `cx-layout` headers to the response to allow Compoxure to know that this app expects it to use a template and where to get it, and the `cx-parse-me` that ensures compoxure knows that these pages contain `cx-` tags (required if using a layout).

`Service`: https://github.com/tes/compoxure-example/tree/master/service

This folder contains a Dockerfile that sets up a simple service with endpoints (that serves some simple fragments). This service will be queried by the proxy server once it received the html from the app and parses the `cx-` markup

`Layout`: https://github.com/tes/compoxure-example/tree/master/layout

This folder contains a service that serves a shared layout, a HTML template that defines slots (via `cx-define-slot`) that content can be composed into. We use a layout to serve the main HTML structure for the site, and apps just push content into slots.

## Converting this into a real service to use

To productionise this, I'd do the following:

1.  Clone the repo, move the `/proxy` directory out to be the base of a new application.
2.  Bolt in whatever you use to manage config, we use https://github.com/tes/conflab, as it supports simple convention based hierarchical config files.
3.  Wire up your own logger and stats into the proxy.js, including replacing the HTTP logger (morgan) if you use something else.
4.  Add your server and backend configuration.
5.  Create a layout service, and add that configuration (if you want to use layouts and slots).
5.  Profit!

We don't have tests in this repo at Tes, as it contains only configuration and very little actual code.  If you have some complex functions or complex configuration you may make different choices!

## Architecture Patterns

In real world usage we have a few patterns that we use at Tes to keep ourselves sane.

`app-*`: applications

We define an application as a node service that returns HTML and provides a UI of some sort to a user.  e.g. the application that allows authors to upload teaching resources on tes.com.

All of the backend configuration points to apps.  These apps respond with server rendered HTML that contains the `cx-` markup.

`service-*`: services

Fragments of content are rendered by services.  We define the service name and base url in the configuration block for servers, so that they can be re-used in the backend configuration by name, e.g. `{{service:profile}}`.  This means you can have the backend configuration in one place (e.g. in `default.json`), and then have the specific services themselves in each environment file.

If you have a registry of services, you can also call that to get a list, and inject those into the config to save you duplicating config.
