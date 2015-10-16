/* global BUILD_VERSION BUILD_COMMIT */

import { hostname } from 'os';

export default function() : Function {
  return function(req, res, next) {
    // Set any specific information about your environment here.
    //
    // NOTE: These are server-side specific environment properties; nothing
    // that comes from the client should be in this object.
    req.environment = {
      version: BUILD_VERSION,
      commit: BUILD_COMMIT,
      hostname: hostname(),
      env: process.env.NODE_ENV,
    };

    // Expose useful information to the client that they might want when
    // calling via HEAD or similar.
    res.set('Version', BUILD_VERSION);
    res.set('Commit', BUILD_COMMIT);

    // Carry on.
    next();
  };
}
