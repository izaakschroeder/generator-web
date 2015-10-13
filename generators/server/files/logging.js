
import morgan from 'morgan';
import headers from 'on-headers';

export default function() {
  const env = process.env.NODE_ENV || 'development';

  // Use simple console logging for development purposes.
  if (env !== 'production') {
    return morgan('dev');
  }

  // TODO: Send logs somewhere useful in production.
  return (req, res, next) => {
    // Wait until before headers are sent in order to capture everything
    // that's gone on with the request.
    headers(res, () => {
      // req.ip
      // req.environment
      // req.timing
      // res.status
    });
    next();
  };
}
