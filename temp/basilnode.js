const randomNumber = require('random-number');

const basilChef = ['mama', 'papa', 'baby'];
const basilTexture = ['greasy', 'frozen', 'spicy'];

function randomItem(array) {
  const randomIndex = randomNumber({
    min: 0,
    max: array.length - 1,
    integer: true,
  });
  return array[randomIndex];
}

// function makeBasil() {
//   return (
//     '<h2>' + randomItem(basilChef) + "'s" + ' ' + randomItem(basilTexture) + ' basil' + '</h2>'
//   );
// }

function makeBasil() {
  return (
    `<h2>${randomItem(basilChef)}'s ${randomItem(basilTexture)} basil</h2>`
  );
}

console.log(makeBasil());