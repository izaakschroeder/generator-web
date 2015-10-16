
import { Element, createElement } from 'react';

/**
 *  Select which parts of the global state we need.
 *  @param {Object} state Input state.
 *  @returns {Object} Resultant state.
 */
function select(state : Object) : Object {
  return state;
}

/**
 * Main application component.
 * @returns {Element}
 */
function App() : Element {
  return (
    <div>Hello World.</div>
  );
}

// Wire up state to the component.
export default connect(select)(App);
