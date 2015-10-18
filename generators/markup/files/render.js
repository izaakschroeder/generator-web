
// React.
import { Component, createElement } from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';

// Prevent XSS.
import escape from 'htmlescape';

/*
function isPromise(object) {
  return object && typeof object.then === 'function';
}

const wait = [];
store.replaceReducer((state, action) => {
  if (isPromise(action)) {
    wait.push(action);
  }
  return oldReducer(state, action);
});
*/

/**
 * Render a redux container. Inject the container's state into the scripts as
 * safe JSON serialized data.
 * @param {Component} Container Redux container to render.
 * @returns {Function} Wrapper function.
 */
export function container(Container : Component) : Function {
  return props => props.then(props => {
    const element = <Container {...props}/>;
    const state = { status: 200, title: 'Hello' };
    const { scripts = [ ] } = props;
    return {
      ...props,
      status: state.status,
      title: state.title,
      markup: renderToString(element),
      scripts: [{
        id: 'state',
        type: 'text/json',
        content: escape(state),
      }, ...scripts],
    };
  });
}

/**
 * Wrap given markup in a static layout component.
 * @param {Component} Layout React component to wrap markup in.
 * @returns {Function} Wrapper function.
 */
export function layout(Layout : Component) : Function {
  return props => props.then(props => {
    const element = <Layout {...props}/>;
    return {
      ...props,
      markup: `<!DOCTYPE html>${renderToStaticMarkup(element)}`,
    };
  });
}
