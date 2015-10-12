import { createHash } from 'crypto';

function torbit(markup) {
  return createHash('sha256').update(markup).digest('hex');
}

export default function(render) {
  return function process(req, res, next) {
    render({
      path: req.path,
      ...req.assets
    }).then(result => {
      const { markup, status /* scripts, styles */ } = result;

      res
        .status(status)
        .set('Content-Type', 'text/html; charset="utf-8"')
        // http://cyh.herokuapp.com/cyh
        // https://github.com/twitter/secureheaders
        .set('Content-Security-Policy', csp(result))
        .set('X-UA-Compatible', 'IE=Edge,chrome=1')
        .send(markup);
    }, next);
  };
}
