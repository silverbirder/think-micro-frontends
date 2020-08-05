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
app.use(serveStatic('static', {'index': ['index.html', 'index.htm']}));

app.get('/dynamic', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<span class="date">' + (new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")) + '</span>');
});

app.get('/500', function(req, res) {
  res.writeHead(500);
  res.end('This is an error.');
});

// Dummy route that serves static assets
app.get(/^\/cdn/, function(req, res) {
  res.writeHead(200);
  res.end('Include: ' + req.url);
});

app.get('/403', function(req, res) {
  res.writeHead(403);
  res.end('Unauthorised error.');
});

app.get('/login', function(req, res) {
  res.writeHead(200);
  res.end('Login form ... <a href="/">back</a>');
});

app.listen(7002, function() {
  console.log('Example service server on http://localhost:7002');
});
