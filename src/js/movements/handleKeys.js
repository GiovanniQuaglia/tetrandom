import { moveDown, moveSide } from './handleMovements';
import activeTetrandom from '../tetrandom/activeTetrandom';
import rotate from './handleRotation';
import { timePassed } from '../display/animation';
import { isRunning } from '../display/animation';

function keyTracking(e) {
  if (!isRunning) {
    return
  }
  switch (e.key) {
    case 'ArrowLeft':
      moveSide(0, activeTetrandom);
      break;
    case 'ArrowRight':
      moveSide(9, activeTetrandom);
      break;
    case 'ArrowDown':
      moveDown(activeTetrandom, timePassed);
      break;
    case 'a':
      rotate(activeTetrandom, -1);
      break;
    case 'd':
      rotate(activeTetrandom, 1);
      break;
    default:
  }
}

export default keyTracking;
