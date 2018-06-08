const {
  API_SERVER_HOST,
  API_SERVER_PORT,
} = require('./constants');

function call(method, payload) {
  const options = { method };
  if (method === 'post') { options.body = JSON.stringify(payload) };
  return fetch(`http://${API_SERVER_HOST}:${API_SERVER_PORT}`, options)
    .then(res => res.json())
}

module.exports = {
  call,
}