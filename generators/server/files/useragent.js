import { lookup } from 'useragent';

export default function() : Function {
  return function(req, res, next) {
    req.agent = lookup(req.get('User-Agent'));
    next();
  };
}
