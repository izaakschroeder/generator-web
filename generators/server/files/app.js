
// Express.
import express from 'express';

// Middleware.
import compression from 'compression';
import logging from './logging';
import environment from './environment';
import useragent from './useragent';
import cookies from './cookies';
import render from './render';

// Create the application.
const app = express();

// Configuration.
app.set('trust proxy', true);
app.set('x-powered-by', false);

// Add assorted middleware.
app.use(logging());
app.use(environment());
app.use(useragent());
app.use(compression());
app.use(assets())
app.use(cookies());
app.use(page());
app.use(error());

// Fire.
export default app;
