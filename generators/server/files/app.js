
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
import render from './render';
import errors from './error';

// Create the application.
const app = express();

// Configuration.
app.set('trust proxy', true);
app.set('x-powered-by', false);

// Middleware.
app.use(logging());
app.use(environment());
app.use(tag());
app.use(useragent());
app.use(compression());
app.use(assets())
app.use(cookies());
app.use(page());
app.use(errors());

// Fire.
export default app;
