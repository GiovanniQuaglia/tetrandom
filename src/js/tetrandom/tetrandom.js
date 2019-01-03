function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkEqualValues(tetrandom) {
  const tetrastring = tetrandom.map(obj => JSON.stringify(obj));
  return tetrastring.filter((string, i) => tetrastring.indexOf(string) === i).length !== 4;
}

function createTetrandom() {
  let tetrandom = [{}, {}, {}, {}];
  tetrandom.forEach((obj) => {
    obj.x = getRandomIntInclusive(3, 6);
    obj.y = getRandomIntInclusive(0, -5);
  });
  if (checkEqualValues(tetrandom)) {
    tetrandom = createTetrandom();
  }
  return tetrandom;
}

export default createTetrandom;
