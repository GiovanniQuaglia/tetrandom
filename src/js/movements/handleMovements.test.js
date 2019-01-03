import { moveDown, moveSide } from './handleMovements';

test('move tetrandom right', () => {
  const activeTetrandom = [
    { x: 2, y: 2 },
    { x: 3, y: 5 },
    { x: 4, y: 3 },
    { x: 4, y: 2 },
  ];
  const firstTetradom = JSON.parse(JSON.stringify(activeTetrandom));
  const movedTetradom = moveSide(9, activeTetrandom);
  movedTetradom.map((newObj, i) => {
    const updatedFirstTetrandom = { x: (firstTetradom[i].x + 1), y: firstTetradom[i].y };
    expect(newObj).toEqual(updatedFirstTetrandom);
  });
});

test('move tetrandom left', () => {
  const activeTetrandom = [
    { x: 2, y: 2 },
    { x: 3, y: 5 },
    { x: 4, y: 3 },
    { x: 4, y: 2 },
  ];
  const firstTetradom = JSON.parse(JSON.stringify(activeTetrandom));
  const movedTetradom = moveSide(0, activeTetrandom);
  movedTetradom.map((newObj, i) => {
    const updatedFirstTetrandom = { x: (firstTetradom[i].x - 1), y: firstTetradom[i].y };
    expect(newObj).toEqual(updatedFirstTetrandom);
  });
});

test('move tetrandom down', () => {
  const activeTetrandom = [
    { x: 2, y: 2 },
    { x: 3, y: 5 },
    { x: 4, y: 3 },
    { x: 4, y: 2 },
  ];
  const firstTetradom = JSON.parse(JSON.stringify(activeTetrandom));
  const movedTetradom = moveDown(activeTetrandom);
  movedTetradom.map((newObj, i) => {
    const updatedFirstTetrandom = { x: firstTetradom[i].x, y: (firstTetradom[i].y + 1) };
    expect(newObj).toEqual(updatedFirstTetrandom);
  });
});
