import inactiveTetrandoms from '../tetrandom/inactiveTetrandoms';
import {isRunning} from '../display/animation';

var linesCounter = 0;

function newGameReset(inactiveTetrandoms) {
  if (inactiveTetrandoms.length > 0) {
    inactiveTetrandoms.length = 0;
  }
  if (linesCounter != 0) {
    linesCounter = 0
  }
}

function countBlocks(blocksCounter) {
  for (let obj of inactiveTetrandoms) {
    if (blocksCounter[obj.y] === undefined) {
      blocksCounter[obj.y] = 1
    }
    else { blocksCounter[obj.y]++ }
  }
}

function findLine(blocksCounter) {
  return Object.keys(blocksCounter).find(key => blocksCounter[key] >= 10);
}

function removeLine(line) {
  if (!isRunning) { return }
  for (let i = inactiveTetrandoms.length - 1; i >= 0; i--) {
    if (inactiveTetrandoms[i].y === line) {
      inactiveTetrandoms.splice(i, 1)
    }
  }
  linesCounter++;
  return inactiveTetrandoms
}

function updateLinesAbove(line) {
  inactiveTetrandoms.forEach(obj => obj.y < line && obj.y++ )
}

function updatesLines(line) {
  removeLine(line)
  updateLinesAbove(line)
}

function checkLineLength(line) {
  if(line <= 0) {return}
  line && updatesLines(parseInt(line))
}

function clearLine() {
  const blocksCounter = {}
  if (inactiveTetrandoms.length === 0){
    return
  }
  else {
    countBlocks(blocksCounter)
  }
  checkLineLength(findLine(blocksCounter))
}

export { clearLine, linesCounter, newGameReset};