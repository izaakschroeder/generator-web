
import { Component, Element, createElement } from 'react';

// Setup the store creator.
const createStore = compose(
  applyMiddleware(promiseMiddleware),
  useDevtools ? devTools() : identity,
  useDevtools ? persistStateMiddleware() : identity,
)(createStore);



function render() {

  compose(userReducer, renderReducer)
  compose(userStore, renderStore);

  function iteration() {

    const markup = renderToString(<Component store={store}/>);
    const { pending, count } = store.getState();

    // Termination condition.
    if (pending.length === 0 || count > 10) {
      return Promise.resolve(markup);
    }

    // Continue processing.
    return Promise.all(pending).then(iteration, iteration);
  }

  return iteration();
}
