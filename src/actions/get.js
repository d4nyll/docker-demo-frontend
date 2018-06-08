const {
  API_SERVER_HOST,
  API_SERVER_PORT,
} = require('../constants');

module.exports = function get() {
  return fetch(`http://${API_SERVER_HOST}:${API_SERVER_PORT}`)
    .then(res => res.json());
}
