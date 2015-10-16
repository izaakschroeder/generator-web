
/**
 * Create a logging reducer for monitoring changes in state.
 * @param {Object} store The current store.
 * @param {Function} next Call to the next reducer.
 * @param {Object} action Action that triggered the state change.
 * @returns {Function} Pass-thru reducer that just notes the state.
 */
export default store => next => action => {
  // Get generated state.
  const state = next(action);

  // Log.
  // Upload state somewhere.
  // xr.post(`/papertrail/${TRANSACTION_ID}/`, state);

  // Pass-thru
  return state;
};
