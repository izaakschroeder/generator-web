
// React.
import { createElement } from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';

// Prevent XSS.
import escape from 'htmlescape';

// Generic page layout.
import Page from './page';
import Root from '../';

function body(root, { scripts = [] }) : Promise {
  // TODO: This is where any flux magic would go.
  return new Promise((resolve) => {
    const state = { };
    resolve({
      status: 200,
      title: 'My Page',
      markup: renderToString(root),
      scripts: [{
        id: 'state',
        type: 'text/json',
        content: escape(state)
      }, ...scripts]
    });
  });
}

function html(root, props) : Promise {
  const markup = renderToStaticMarkup(<Page {...props}/>);
  return Promise.resolve({
    ...props,
    markup: `<!DOCTYPE html>${markup}`
  });
}

export default function render(root, props) : Promise {
  return Promise.all([
    body(root, props)
  ]).then(([body]) => {
    return html(root, {
      ...props,
      ...body
    });
  });
}
