import { newGameReset } from './clearLine';

test('reset old game score', () => {
  const inactiveTetrandoms = [
    { x: 2, y: 2 },
    { x: 3, y: 5 },
    { x: 4, y: 3 },
    { x: 4, y: 2 },
  ];
  var linesCounter = 12;
  const resettedParams = newGameReset(inactiveTetrandoms);
  expect(resettedParams).toEqual(0);
  expect(inactiveTetrandoms).toEqual([]);
});
