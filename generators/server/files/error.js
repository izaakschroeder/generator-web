
import glob from 'glob';
import { readFileSync } from 'fs';

function view(views) {
  return function get(codes, err) {
    for (const i of codes) {
      if (i in views) {
        return views[i](err);
      }
    }
    return 'An unknown error occurred.';
  }
}

// In production send statically generated content. This same content
// can be used at the CDN level if the backend servers have errors
// ensuring consistent error views.
function handlers() {
  if (process.env.NODE_ENV === 'production') {
    return glob.sync('build/errors/*.html').map(path => {
      const data = readFileSync(path, 'utf8');
      return {
        code: '',
        handler: () => data,
      };
    });
  } else {
    const entries = require.context('errors/');
    return entries.keys().map(key => {
      return {
        code: '',
        handler: entries[key],
      };
    });
  }
}

export default function() {
  // Create the error rendering function.
  const render = view(handlers());

  // Create the middleware.
  return function(err, req, res, next) {
    // Propagate HTTP status code information
    err.status = err.status || 500;
    res.status(err.status);
    // Try to find available error view for given status; if not available
    // then try to use the 500 error view. If that isn't avaialble then just
    // bail entirely.
    res.send(render(err));
  };
}
