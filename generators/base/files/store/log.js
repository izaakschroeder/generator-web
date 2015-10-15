
/**
 * XXX
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
