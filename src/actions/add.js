const {
  API_SERVER_HOST,
  API_SERVER_PORT,
} = require('../constants');

module.exports = function add(data) {
  return fetch(`http://${API_SERVER_HOST}:${API_SERVER_PORT}`, {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    },
    method: 'post',
   })
    .then(res => res.text());
}
