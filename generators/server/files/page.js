
import { compose } from 'redux';
import { layout, container } from 'markup/render';

// Components for rendering the page.
import Page from 'component/layout/page';
import App from 'container/root';

const render = compose(container(App), layout(Page));

export default function() {
  return function process(req, res) {
    render(result => {
      const { markup, status, locale /* scripts, styles */ } = result;

      res
        .status(status)

        // General headers.
        // https://en.wikipedia.org/wiki/List_of_HTTP_header_fields
        .set('Allow', 'GET')
        .set('Content-Type', 'text/html; charset="utf-8"')
        .set('Content-Language', locale)
        .set('X-UA-Compatible', 'IE=Edge,chrome=1')

        // Security-related.
        // https://www.owasp.org/index.php/List_of_useful_HTTP_headers
        // .set('Strict-Transport-Security', 'max-age=16070400; includeSubDomains')
        .set('X-Frame-Options', 'deny')
        .set('X-XSS-Protection', '1; mode=block')
        .set('X-Download-Options', 'noopen')
        .set('X-Content-Type-Options', 'nosniff')
        // TODO: .set('Content-Security-Policy', csp(result))

        // Send actual content.
        .send(markup);
    })({
      markup: 'Hello world',
      status: 200,
      path: req.path,
      ...req.assets,
    });
  };
}
