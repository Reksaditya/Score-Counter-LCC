const addPlayer = document.getElementById('add-player-btn');
const playerInput = document.getElementById('player-input');
const playersList = document.getElementById('players-list');
const reset = document.getElementById('reset');

// Player Input
addPlayer.addEventListener('click', () => {
  const player = document.createElement('li');
  const countAdd = document.createElement('button');
  const countMin = document.createElement('button');
  const total = document.createElement('p');
  const clear = document.createElement('button');
  player.textContent = playerInput.value;
  playersList.appendChild(player);
  playerInput.value = '';
  countAdd.textContent = '+100';
  player.appendChild(countAdd);
  countMin.textContent = '-50';
  player.appendChild(countMin);
  total.textContent = '0';
  player.appendChild(total);
  if (countAdd.addEventListener && countMin.addEventListener) {
    countAdd.addEventListener('click', () => {
      total.textContent = parseInt(total.textContent) + 100;
    });
    countMin.addEventListener('click', () => {
      total.textContent = parseInt(total.textContent) - 50;
    });
  }
  clear.addEventListener('click', () => {
    player.remove();
  });
  player.appendChild(clear);
});

if (reset.addEventListener) {
  reset.addEventListener('click', () => {
    playersList.innerHTML = '';
  });
}