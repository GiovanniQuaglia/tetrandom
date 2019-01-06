import inactiveTetrandoms from '../tetrandom/inactiveTetrandoms';

var linesCounter = 0;

function newGameReset(inactiveTetrandoms) {
  inactiveTetrandoms.length = 0;
  linesCounter = 0;
  return linesCounter
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
  return Object.keys(blocksCounter).find(key => blocksCounter[key] >= 4);
}

function removeLine(line) {
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
