import rotate from './handleRotation';

test('rotate 4x4 tetrandom clockwise', () => {
  const activeTetrandom = [
    { x: 2, y: 6 },
    { x: 3, y: 6 },
    { x: 4, y: 6 },
    { x: 5, y: 6 },
    { x: 2, y: 7 },
    { x: 3, y: 7 },
    { x: 4, y: 7 },
    { x: 5, y: 7 },
    { x: 2, y: 8 },
    { x: 3, y: 8 },
    { x: 4, y: 8 },
    { x: 5, y: 8 },
    { x: 2, y: 9 },
    { x: 3, y: 9 },
    { x: 4, y: 9 },
    { x: 5, y: 9 },
  ];
  const rotatedTetradom = [
    { x: 5, y: 6 },
    { x: 5, y: 7 },
    { x: 5, y: 8 },
    { x: 5, y: 9 },
    { x: 4, y: 6 },
    { x: 4, y: 7 },
    { x: 4, y: 8 },
    { x: 4, y: 9 },
    { x: 3, y: 6 },
    { x: 3, y: 7 },
    { x: 3, y: 8 },
    { x: 3, y: 9 },
    { x: 2, y: 6 },
    { x: 2, y: 7 },
    { x: 2, y: 8 },
    { x: 2, y: 9 },
  ];
  const movedTetradom = rotate(activeTetrandom, 1);
  expect(movedTetradom).toEqual(rotatedTetradom);
});

test('rotate 3x4 tetrandom clockwise', () => {
  const activeTetrandom = [
    { x: 2, y: 6 },
    { x: 3, y: 6 },
    { x: 4, y: 6 },
    { x: 5, y: 6 },
    { x: 2, y: 7 },
    { x: 3, y: 7 },
    { x: 4, y: 7 },
    { x: 5, y: 7 },
    { x: 2, y: 8 },
    { x: 3, y: 8 },
    { x: 4, y: 8 },
    { x: 5, y: 8 },
  ];
  const rotatedTetradom = [
    { x: 5, y: 6 },
    { x: 5, y: 7 },
    { x: 5, y: 8 },
    { x: 5, y: 9 },
    { x: 4, y: 6 },
    { x: 4, y: 7 },
    { x: 4, y: 8 },
    { x: 4, y: 9 },
    { x: 3, y: 6 },
    { x: 3, y: 7 },
    { x: 3, y: 8 },
    { x: 3, y: 9 },
  ];
  const movedTetradom = rotate(activeTetrandom, 1);
  expect(movedTetradom).toEqual(rotatedTetradom);
});

test('rotate 3x4 tetrandom clockwise', () => {
  const activeTetrandom = [
    { x: 2, y: 6 },
    { x: 3, y: 6 },
    { x: 4, y: 6 },
    { x: 5, y: 6 },
    { x: 2, y: 7 },
    { x: 3, y: 7 },
    { x: 4, y: 7 },
    { x: 5, y: 7 },
  ];
  const rotatedTetradom = [
    { x: 4, y: 5 },
    { x: 4, y: 6 },
    { x: 4, y: 7 },
    { x: 4, y: 8 },
    { x: 3, y: 5 },
    { x: 3, y: 6 },
    { x: 3, y: 7 },
    { x: 3, y: 8 },
  ];
  const movedTetradom = rotate(activeTetrandom, 1);
  expect(movedTetradom).toEqual(rotatedTetradom);
});

test('rotate 3x4 tetrandom clockwise 4 times', () => {
  const activeTetrandom = [
    { x: 2, y: 6 },
    { x: 3, y: 6 },
    { x: 4, y: 6 },
    { x: 5, y: 6 },
    { x: 2, y: 7 },
    { x: 3, y: 7 },
    { x: 4, y: 7 },
    { x: 5, y: 7 },
    { x: 2, y: 8 },
    { x: 3, y: 8 },
    { x: 4, y: 8 },
    { x: 5, y: 8 },
  ];
  const rotatedTetradom = [
    { x: 2, y: 6 },
    { x: 3, y: 6 },
    { x: 4, y: 6 },
    { x: 5, y: 6 },
    { x: 2, y: 7 },
    { x: 3, y: 7 },
    { x: 4, y: 7 },
    { x: 5, y: 7 },
    { x: 2, y: 8 },
    { x: 3, y: 8 },
    { x: 4, y: 8 },
    { x: 5, y: 8 },
  ];
  const movedTetradom = rotate(rotate(rotate(rotate(activeTetrandom, 1), 1), 1), 1);
  expect(movedTetradom).toEqual(rotatedTetradom);
});

test('rotate 3x2 tetrandom clockwise 4 times', () => {
  const activeTetrandom = [
    { x: 2, y: 6 },
    { x: 3, y: 6 },
    { x: 4, y: 6 },
    { x: 2, y: 7 },
    { x: 3, y: 7 },
    { x: 4, y: 7 },
  ];
  const rotatedTetradom = [
    { x: 2, y: 6 },
    { x: 3, y: 6 },
    { x: 4, y: 6 },
    { x: 2, y: 7 },
    { x: 3, y: 7 },
    { x: 4, y: 7 },
  ];
  const movedTetradom = rotate(rotate(rotate(rotate(activeTetrandom, 1), 1), 1), 1);
  expect(movedTetradom).toEqual(rotatedTetradom);
});

test('rotate 4x4 tetrandom anticlockwise', () => {
  const activeTetrandom = [
    { x: 2, y: 6 },
    { x: 3, y: 6 },
    { x: 4, y: 6 },
    { x: 5, y: 6 },
    { x: 2, y: 7 },
    { x: 3, y: 7 },
    { x: 4, y: 7 },
    { x: 5, y: 7 },
    { x: 2, y: 8 },
    { x: 3, y: 8 },
    { x: 4, y: 8 },
    { x: 5, y: 8 },
    { x: 2, y: 9 },
    { x: 3, y: 9 },
    { x: 4, y: 9 },
    { x: 5, y: 9 },
  ];
  const rotatedTetradom = [
    { x: 2, y: 9 },
    { x: 2, y: 8 },
    { x: 2, y: 7 },
    { x: 2, y: 6 },
    { x: 3, y: 9 },
    { x: 3, y: 8 },
    { x: 3, y: 7 },
    { x: 3, y: 6 },
    { x: 4, y: 9 },
    { x: 4, y: 8 },
    { x: 4, y: 7 },
    { x: 4, y: 6 },
    { x: 5, y: 9 },
    { x: 5, y: 8 },
    { x: 5, y: 7 },
    { x: 5, y: 6 },
  ];
  const movedTetradom = rotate(activeTetrandom, -1);
  expect(movedTetradom).toEqual(rotatedTetradom);
});

test('rotate 3x2 tetrandom anticlockwise 4 times', () => {
  const activeTetrandom = [
    { x: 2, y: 6 },
    { x: 3, y: 6 },
    { x: 4, y: 6 },
    { x: 2, y: 7 },
    { x: 3, y: 7 },
    { x: 4, y: 7 },
  ];
  const rotatedTetradom = [
    { x: 2, y: 6 },
    { x: 3, y: 6 },
    { x: 4, y: 6 },
    { x: 2, y: 7 },
    { x: 3, y: 7 },
    { x: 4, y: 7 },
  ];
  const movedTetradom = rotate(rotate(rotate(rotate(activeTetrandom, -1), -1), -1), -1);
  expect(movedTetradom).toEqual(rotatedTetradom);
});
