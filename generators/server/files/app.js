
// Express.
import express from 'express';

// Middleware.
import compression from 'compression';
import logging from './logging';
import environment from './environment';
import tag from './tag';
import useragent from './useragent';
import assets from './assets';
import cookies from './cookies';
import locale from './locale';
import render from './render';
import errors from './errors';

// Create the application.
const app = express();

// Configuration.
// See: http://expressjs.com/4x/api.html#app.settings.table.
app.set('trust proxy', true);
app.set('x-powered-by', false);

// Middleware.
// See: http://expressjs.com/guide/using-middleware.html.
app.use(logging());
app.use(environment());
app.use(tag());
app.use(useragent());
app.use(compression());
app.use(assets())
app.use(cookies());
app.use(locale());
app.use(page());
app.use(errors());

// Fire.
export default app;
