const el = document.querySelector('div.content h2')

function randomName(array) {
  const min = 0;
  const max = array.length - 1
  const randomIndex = Math.floor(Math.random() * (max + 1));
  return array[randomIndex];
}

const makeBasil = () => {
  const basilChef = ['mama', 'papa', 'baby'];
  const basilTexture = ['greasy', 'frozen', 'spicy'];

  return `
  <h2>${randomName(basilChef)}'s ${randomName(basilTexture)} basil</h2>
  `
};

console.log(makeBasil());

el.innerHTML = makeBasil()


// Popover

document.addEventListener('click', decide, false)

var betaContent = `
<h2>In Beta</h2>
<p>Information about the beta program.<p>
<div class="closer" href="#0">
<div class="closex">✖︎</div>
</div>
`

var itContent = `
<h2>Coming Soon</h2>
<p>This feature coming soon.<p>
<div class="closer" href="#0">
<div class="closex">✖︎</div>
</div>
`

function decide() {
  console.log(event.target);
  if (event.target.matches('.beta')) {
      makePopover(betaContent); // NEW
  } else if (event.target.matches('.it')) { // NEW
      makePopover(itContent); // NEW
  } else if (event.target.matches('.closex')) {
      destroyPopover()
  }
}

function makePopover(content) {
  if (document.querySelector('.betainfo')) { //NEW
    destroyPopover(); //NEW
} //NEW
  var popover = document.createElement('div');
  popover.classList.add('betainfo');
  var popoverContent = content;
  popover.innerHTML = popoverContent;
  document.querySelector('body').append(popover);
  
  // var popoverCloseButton = document.querySelector('.closer') // NEW
  // popoverCloseButton.addEventListener('click', destroyPopover) // NEW
}
// NEW
function destroyPopover() {
    document.querySelector('.betainfo').remove();
    event.preventDefault()
}