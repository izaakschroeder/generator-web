// Redux primitives.
import { compose, createStore, applyMiddleware } from 'redux';

// Middleware.
import promise from
import log from './log';

// Build store creator function.
export default compose(
  applyMiddleware(promiseMiddleware)
  applyMiddleware(log)
)(createStore);
