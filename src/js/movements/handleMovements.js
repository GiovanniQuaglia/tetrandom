import activeTetrandom from '../tetrandom/activeTetrandom';
import { inactiveTetraminsCollision, checkCollisions } from './collisions';

function moveDown(activeTetrandom) {
  if (checkCollisions()) {
    return
  }
  activeTetrandom.forEach(obj => {
    obj.y ++;
  });
  return activeTetrandom;
}

function borderCollision({x}) {
  return x === this.border;
}


function checkSideCollisions(side, coord, dir) {
  if (activeTetrandom.some(borderCollision, side)) {
    return false;
  }
  if (inactiveTetraminsCollision(coord, dir)) {
    return false;
  }
  return true;
}

function moveSide(border, activeTetrandom) {
  if (border === 0 && checkSideCollisions({ border }, 'x', -1)) {
    activeTetrandom.forEach((obj) => {
      obj.x--;
    });
    return activeTetrandom;
  }
  if (border === 9 && checkSideCollisions({ border }, 'x', 1)) {
    activeTetrandom.forEach((obj) => {
      obj.x++;
    });
    return activeTetrandom;
  }
}

export { moveDown, moveSide };
