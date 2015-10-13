
import uuid from 'node-uuid';

export default function() {
  return function(req, res, next) {
    // See: http://stackoverflow.com/a/26386900
    // This is essentially a "transaction id" for being able to correlate this
    // request with other events; it can be referenced by other modules, other
    // logging systems or even the front-end client.
    req.tag = uuid.v1();
    next();
  };
};
