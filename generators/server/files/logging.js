
import morgan from 'morgan';
import headers from 'on-headers';

export default function() : Function {
  const env = process.env.NODE_ENV || 'development';

  // Use simple console logging for development purposes.
  if (env !== 'production') {
    return morgan('dev');
  }

  // TODO: https://github.com/expressjs/response-time/blob/master/index.js
  return ({ ip, environment, agent, timing, url, tag }, res, next) => {
    // Wait until before headers are sent in order to capture everything
    // that's gone on with the request. To correlate events you can use the
    // `tag` property.
    headers(res, () => {
      // TODO: Send data somewhere useful in production.
      // const entry = { ip, tag, environment, timing, agent, status, url };
    });

    next();
  };
}
