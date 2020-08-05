/**
 * This is an example layout service, it serves a page template with slots, that compoxure
 * can then use as a layout to add content to from apps.
 *
 * At Tes we the layout holds our overall page structure and common components used across apps.
 */

const express = require('express');
const morgan = require('morgan');
const serveStatic = require('serve-static');

const app = express();
app.disable('x-powered-by');
app.use(morgan('combined'));
app.use(serveStatic('static', {'index': ['layout.html']}));

app.listen(7003, function() {
  console.log('Example layout server on http://localhost:7003');
});
