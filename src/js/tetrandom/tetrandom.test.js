import createTetrandom from './tetrandom';

describe('new tetrandom', () => {
  const tetrandom = createTetrandom();
  it('contains 4 elements', () => {
    expect(tetrandom).toHaveLength(4);
  });
  it('contains only objects', () => {
    tetrandom.map((obj) => {
      const objType = typeof obj === 'object';
      expect(objType).toBeTruthy();
    });
  });
  it('contains objects with 2 keys containing numbers in a range', () => {
    tetrandom.map((obj) => {
      const xRange = obj.x >= 3 && obj.x <= 6;
      const yRange = obj.y <= -1 && obj.y >= -4;
      expect(xRange).toBeTruthy();
      expect(yRange).toBeTruthy();
    });
  });
});
