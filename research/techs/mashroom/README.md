# Mashroom Portal Quickstart

Quickstart template for the [Mashroom Server](https://www.mashroom-server.com) Portal, an **Integration Platform for Microfrontends**.

This template demonstrates how to integrate a standalone React app into the Portal.

## Start the server

-   npm run setup
-   npm start

Open [http://localhost:5050](http://localhost:5050) in your browser.

Available users:

-   john/john
-   admin/admin

If you start the server without NODE_ENV set it will be in development mode and automatically detect changes in the
plugin-packages folder and hot reload plugins.

So, if you place the _Example React App_ on a page and change its code it will be reloaded automatically.

### Docker

To run the server within a docker container:

    npm run docker:create-image
    npm run docker:start

### Production hints

To run the server in cluster mode you can start it with PM2 like so:

    NODE_ENV=production pm2 start ./mashroom-starter -i max

### Start the React app in development mode

    npm run setup
    cd plugin-packages/example-react-app
    npm run dev

## Configuration

There is a set of configuration files for development and production in the config folder.

-   Server config: _mashroom.json_
-   Log4js config: _log4js.json_ or _log4js.js_
-   URL pattern based access control: _acl.json_
-   Users for simple security provider: _users.json_
-   The list of remote portal apps: _remote-portal-apps.json_

## Storage

The Portal configuration will be stored in _data/storage_. Typically you would put the json files there
under version control.

## Plugins

This quickstart template consists of a example React Portal App, a example Theme and example Layouts.

### Adding new Plugins

All modules added in the _plugin-packages_ folder are automatically scanned.

You can also add plugins as _dependencies_ in the root _package.json_.
In that case you have to add the path to the installed package to the _pluginPackageFolders_ in _mashroom.json_.

## Development

All plugins can be developed standalone:

-   Example React App: Run _npm run dev_ in the _example-react-app_ folder
-   Example Theme: Run _npm run dev_ in the _example-theme_ folder and open http://localhost:6060
