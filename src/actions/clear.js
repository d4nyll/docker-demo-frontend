const {
  API_SERVER_HOST,
  API_SERVER_PORT,
} = require('../constants');

module.exports = function clear() {
  return fetch(`http://${API_SERVER_HOST}:${API_SERVER_PORT}`, { method: 'delete' })
    .then(res => res.text());
}
