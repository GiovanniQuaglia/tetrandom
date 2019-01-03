import { start } from './animation';
import { linesCounter } from '../movements/clearLine';
import { newGameReset } from '../movements/clearLine';
import inactiveTetrandoms from '../tetrandom/inactiveTetrandoms';

const table = document.getElementById('table');

function displayTitle() {
  const title = document.createElement("h1");
  title.id = 'title';
  table.appendChild(title);
  title.innerHTML = 'TETRANDOM';
}

function displayCommands() {
  const commands = document.createElement("h3");
  commands.id = 'commands';
  table.appendChild(commands);
  commands.innerHTML = `Move the TETRANDOMS with the ARROW KEYS<br>Rotate them with the keys 'A' and 'D'<br>Good luck!`;
}

function displayStartButton() {
  const startButton = document.createElement("button");
  startButton.id = 'startButton';
  table.appendChild(startButton);
  startButton.innerHTML = `start`;
  startButton.onclick = onStartButtonClick;
}

function displayStartScreen() {
  displayTitle();
  displayCommands();
  displayStartButton();
}

function onStartButtonClick() {
  clearDomElements();
  displayPlayScreen();
  newGameReset(inactiveTetrandoms, linesCounter);
  start();
}

function clearDomElements() {
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
}

function displayContainer() {
  const container = document.createElement("div");
  container.id = 'container';
  table.appendChild(container);
  return container
}

function displayCanvas() {
  const canvas = document.createElement("canvas");
  canvas.id = 'canvas';
  container.appendChild(canvas);
}

function displayCounter() {
  const counter = document.createElement("div");
  counter.id = 'counter';
  table.appendChild(counter);
}

function displayPlayScreen() {
  displayContainer();
  displayCanvas();
  displayCounter();
}


function displayGameOver() {
  const gameOver = document.createElement("h1");
  gameOver.id = 'title';
  table.appendChild(gameOver);
  gameOver.innerHTML = 'GAME OVER';
}

function displayScore() {
  const score = document.createElement("h3");
  score.id = 'commands';
  table.appendChild(score);
  score.innerHTML = `SCORE: ${linesCounter}`;
}

function displayPlayAgainButton() {
  const playAgainButton = document.createElement("button");
  playAgainButton.id = 'startButton';
  table.appendChild(playAgainButton);
  playAgainButton.innerHTML = `play again`;
  playAgainButton.onclick = onStartButtonClick;
}

function displayFinalScreen() {
  displayGameOver();
  displayScore();
  displayPlayAgainButton();
}

export {displayStartScreen, clearDomElements, displayFinalScreen};
