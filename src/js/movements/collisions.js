import activeTetrandom from '../tetrandom/activeTetrandom';
import inactiveTetrandoms from '../tetrandom/inactiveTetrandoms';
import createTetrandom from '../tetrandom/tetrandom';
import {endGame} from '../display/animation';

function updateInactiveTetradoms() {
  activeTetrandom.map(obj => inactiveTetrandoms
    .push(JSON.parse(JSON.stringify(obj)))
  );
}

function createNewTetrandom() {
  const newActiveTetrandom = createTetrandom();
  activeTetrandom.forEach((obj, i) => {
    obj.x = newActiveTetrandom[i].x;
    obj.y = newActiveTetrandom[i].y;
  });
}

function baseCollision({y}) {
  return y === 19;
}

function outOfScreen({y}) {
  return y <= 0;
}

function inactiveTetraminsCollision(coord, dir) {
  for (const obj of activeTetrandom) {
    const newObj = JSON.parse(JSON.stringify(obj));
    newObj[coord] = (newObj[coord] + dir);
    const newStringObj = JSON.stringify(newObj);
    for (let i = 0; i < inactiveTetrandoms.length; i++) {
      if (newStringObj === JSON.stringify(inactiveTetrandoms[i])) {
        return true;
      }
    }
  }
}

function checkCollisions() {
  if (activeTetrandom.some(baseCollision)) {
    updateInactiveTetradoms();
    createNewTetrandom();
    return;
  }
  if (inactiveTetraminsCollision('y', 1)) {
    updateInactiveTetradoms();
    createNewTetrandom();
    return;
  }
  if (inactiveTetrandoms.some(outOfScreen)) {
    endGame();
  }
}

export {checkCollisions, inactiveTetraminsCollision};
