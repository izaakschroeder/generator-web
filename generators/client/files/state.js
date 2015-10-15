
function load() {
  try {
    const element = document.getElementById('state');
    return element ?
      JSON.parse(element.textContent || element.innerText || '{}') : { };
  } catch (e) {
    return { };
  }
}

export default load;
