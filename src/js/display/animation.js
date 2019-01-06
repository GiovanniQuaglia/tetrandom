import { moveDown } from '../movements/handleMovements';
import { checkCollisions } from '../movements/collisions';
import iterateScreenToDraw from './canvas';
import activeTetrandom from '../tetrandom/activeTetrandom';
import {clearLine} from '../movements/clearLine';
import {updatesLinesCounter} from './linesCounter';
import {clearDomElements, displayFinalScreen} from './domElements';
import { linesCounter } from '../movements/clearLine';

let lastFrameTimeMs = 0,
  maxFPS = 60,
  delta = 0,
  timestep = 1000 / 60,
  fps = 60,
  framesThisSecond = 0,
  lastFpsUpdate = 0,
  running = false,
  started = false,
  frameID = 0,
  timePassed = 0,
  isRunning = false;

function update() {
  if(timePassed > 100) {
    moveDown(activeTetrandom);
    timePassed = 0;
  }
  checkCollisions();
  clearLine();
  iterateScreenToDraw();
  updatesLinesCounter(linesCounter);
}

function panic() {
  delta = 0;
}

const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

function start() {
  if (!started) {
    started = true;
    isRunning = true;
    frameID = requestAnimationFrame(function(timestamp) {
      running = true;
      lastFrameTimeMs = timestamp;
      lastFpsUpdate = timestamp;
      framesThisSecond = 0;
      frameID = requestAnimationFrame(mainLoop);
    });
  }
}

function stopGame() {
  isRunning = false;
}

const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

function endGame() {
  running = false
  started = false
  cancelAnimationFrame(frameID);
  clearDomElements();
  displayFinalScreen();
}

function mainLoop(timestamp) {
  timePassed++
  if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
    frameID = requestAnimationFrame(mainLoop);
    return;
  }
  delta += timestamp - lastFrameTimeMs;
  lastFrameTimeMs = timestamp;

  if (timestamp > lastFpsUpdate + 1000) {
    fps = 0.25 * framesThisSecond + 0.75 * fps;

    lastFpsUpdate = timestamp;
    framesThisSecond = 0;
  }
  framesThisSecond++;

  var numUpdateSteps = 0;
  while (delta >= timestep) {
    update();
    delta -= timestep;
    if (++numUpdateSteps >= 240) {
      panic();
      break;
    }
  }
  if (!isRunning) {
    endGame()
    return
  }
  frameID = requestAnimationFrame(mainLoop);
}


export {start, endGame, isRunning, timePassed, stopGame};
