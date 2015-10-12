
// Express.
import express from 'express';

// Middleware.
import compression from 'compression';
import cookies from './cookies';
import render from './render';

// Create the application.
const app = express();

// Add assorted middleware.
app.use(compression());
app.use(assets())
app.use(cookies());
app.use(page(render));

// Fire.
export default app;
