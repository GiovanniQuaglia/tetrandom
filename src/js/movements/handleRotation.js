import inactiveTetrandoms from '../tetrandom/inactiveTetrandoms';

function fixMidpoint(currentCoord, comparisonCoord, rotationQuarter) {
  if (currentCoord % 1 === 0 && comparisonCoord % 1 !== 0) {
    return rotationQuarter <= 2 ? (currentCoord += 0.5) : (currentCoord -= 0.5);
  }
  return currentCoord;
}

function findCoord(coord, activeTetrandom) {
  return ((Math.min(...activeTetrandom.map(obj => obj[coord]))) + (Math.max(...activeTetrandom.map(obj => obj[coord])))) / 2;
}

function tetrandomMidpoint(mainCoord, comparisonCoord, rotationQuarter, activeTetrandom) {
  return fixMidpoint(findCoord(mainCoord, activeTetrandom), findCoord(comparisonCoord, activeTetrandom), rotationQuarter);
}

function rotateTetrandomBlocks(midX, midY, activeTetrandom, rotationDirection) {
  activeTetrandom.forEach((block) => {
    const diffX = midX - ((block.y - midY) * rotationDirection);
    const diffY = midY + ((block.x - midX) * rotationDirection);
    block.x = diffX;
    block.y = diffY;
  });
  return activeTetrandom
}

function updateRotationQuarter(rotationQuarter) {
  return rotationQuarter < 4 ? rotationQuarter += 1 : 1;
}

function borderSideCompenetration(activeTetrandom) {
  if (activeTetrandom.some(obj => obj.x < 0)) {
    return 1;
  }
  else if (activeTetrandom.some(obj => obj.x > 9)) {
    return -1;
  }
  else return false
}

function bottomCompenetration(obj) {
  return obj.y > 19;
}

function adjustBorderCompenetration(activeTetrandom, coord, adjustDirection) {
  activeTetrandom.forEach((obj) => {
    obj[coord] = (obj[coord] + adjustDirection);
  });
}

function fixBottomCollision(activeTetrandom) {
  if (activeTetrandom.some(bottomCompenetration)) {
    adjustBorderCompenetration(activeTetrandom, 'y', -1);
    fixBottomCollision(activeTetrandom);
  }
  return activeTetrandom
}

function fixBorderCollisions(activeTetrandom) {
  const side = borderSideCompenetration(activeTetrandom);
  if (side) {
    adjustBorderCompenetration(activeTetrandom, 'x', side);
    fixBorderCollisions(activeTetrandom);
  }
}




function fixCollisions(activeTetrandom) {
  fixBorderCollisions(fixBottomCollision(activeTetrandom))
  return activeTetrandom
}

function checkInactiveTetradomsCompenetrations(activeTetrandom) {
  for (const obj of activeTetrandom) {
    for (let q = 0; q < inactiveTetrandoms.length; q++) {
      if (JSON.stringify(obj) === JSON.stringify(inactiveTetrandoms[q])) {
        return true;
      }
    }
  }
}

function fixBlocksCompenetration(activeTetrandom, oldTetrandom) {
  if (checkInactiveTetradomsCompenetrations(activeTetrandom)) {
    activeTetrandom.forEach((obj, i) => {
      obj.x = oldTetrandom[i].x;
      obj.y = oldTetrandom[i].y;
    });
    return activeTetrandom;
  }
}

function handleRotation() {
  let rotationQuarter = 1;

  return function rotationStep(activeTetrandom, rotationDirection) {
    const oldTetrandom = JSON.parse(JSON.stringify(activeTetrandom));
    const midX = tetrandomMidpoint('x', 'y', rotationQuarter, activeTetrandom);
    const midY = tetrandomMidpoint('y', 'x', rotationQuarter, activeTetrandom);
    rotationQuarter = updateRotationQuarter(rotationQuarter);
    fixBlocksCompenetration(fixCollisions(rotateTetrandomBlocks(midX, midY, activeTetrandom, rotationDirection)), oldTetrandom);
    return activeTetrandom;
  };
}

const rotate = handleRotation();

export default rotate;
