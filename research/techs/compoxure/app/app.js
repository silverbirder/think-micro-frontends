/**
 * Example backend server to allow the demo to work, these would actually be your real life
 * applications and services.
 *
 * The example backend response that contains the compoxure fragment config is in static/backend.html.
 */

const express = require('express');
const morgan = require('morgan');
const serveStatic = require('serve-static');

const app = express();
app.disable('x-powered-by');
app.use(morgan('combined'));

/**
 * The application can let compoxure know that it uses a layout, and where to find it.
 */
app.use(function(req, res, next) {
  res.set('cx-parse-me','true');
  res.set('cx-layout','{{server:layout}}/layout.html');
  return next();
});

/**
 * Serve some static html, in the real world you would probably do something more complicated.
 */
app.use(serveStatic('static', {'index': ['index.html', 'index.htm']}));

app.listen(7001, function() {
  console.log('Example backend server on http://localhost:7001');
});
