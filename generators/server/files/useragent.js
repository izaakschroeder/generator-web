import { lookup } from 'useragent';

export default function() {
  return function(req, res, next) {
    req.agent = lookup(req.get('User-Agent'));
    next();
  };
}
