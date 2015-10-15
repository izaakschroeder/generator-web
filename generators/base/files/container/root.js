// Main application container.
import App from 'container/app';

// Application root store and reducer.
import reducer from 'reducer';
import createStore from 'store';

/**
 * Root container. This is basically the entrypoint for your application.
 * @param {Object} state Initial application state.
 */
export default function Container(state : Object) : Element {
  // Create a new store for the app.
  const store = createStore(reducer, state);

  // Add your app here.
  return (
    <div>
      <Provider store={store}><App/></Provider>
    </div>
  );
}
