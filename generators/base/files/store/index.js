// Redux primitives.
import { compose, createStore, applyMiddleware } from 'redux';

// Middleware.
import log from './log';

// Build store creator function.
export default compose(
  applyMiddleware(log)
)(createStore);
