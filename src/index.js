const add = require('./actions/add');
const get = require('./actions/get');
const clear = require('./actions/clear');

const randomAnimals = ['anteater', 'bonobo', 'cat', 'dog', 'emu', 'flamingo', 'greenfly', 'monkey']

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function generateRandomObject(keyEnum = randomAnimals, valueEnum = randomAnimals) {
  const key = getRandom(keyEnum);
  const value = getRandom(valueEnum);
  return { [key]: value };
}

const eventHandlers = {
  "clear-button": () => clear(),
  "generate-button": () => {
    const randomObject = generateRandomObject();
    const input = document.getElementById('input');
    input.value = JSON.stringify(randomObject);
  },
  "submit-button": () => {
    const input = document.getElementById('input');
    try {
      const value = JSON.parse(input.value);
      add(value);
    } catch(e) {
      // Silently ignore it
    }
  },
}

function poll() {
  const elements = {};
  elements.list = document.getElementById('list');
  setInterval(function() {
    get()
      // .then(res => JSON.parse(res))
      .then(list => {
        elements.list.innerHTML = "";
        list.forEach(item => {
          const key = Object.keys(item)[0];
          const value = item[key];
          const entry = document.createElement('li')
          entry.textContent = `${key.padStart(10, ' ')}: ${value}`;
          elements.list.appendChild(entry);
        })
      })
  }, 1000);
}

function init() {
  document.getElementById('clear-button').addEventListener('click', eventHandlers["clear-button"])
  document.getElementById('generate-button').addEventListener('click', eventHandlers["generate-button"])
  document.getElementById('submit-button').addEventListener('click', eventHandlers["submit-button"])
  poll();
}

init();
