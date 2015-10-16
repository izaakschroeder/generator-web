
/**
 * Load the state used by the server to render the page. The state is saved
 * in a JSON script element called "state" which is then read and deserialized.
 * If anything fails just return an empty state object.
 * @returns {Object} Saved state.
 */
function load() : Object {
  try {
    const element = document.getElementById('state');
    return element ?
      JSON.parse(element.textContent || element.innerText || '{}') : { };
  } catch (e) {
    return { };
  }
}

export default load;
