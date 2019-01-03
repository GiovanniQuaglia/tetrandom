import activeTetrandom from '../tetrandom/activeTetrandom';
import inactiveTetrandoms from '../tetrandom/inactiveTetrandoms';

const block = 20;

function fillActiveBlock(x, y, ctx) {
  ctx.fillStyle = '#000';
  ctx.fillRect((block * x), (block * y), 20, 20);
}

function fillInactiveBlock(x, y, ctx) {
  ctx.fillStyle = '#696969';
  ctx.fillRect((block * x), (block * y), 20, 20);
}

function iterateScreenToDraw() {
  const canvas = document.getElementById('canvas');
  if(!canvas) {
    return
  }
  const ctx = canvas.getContext('2d');
  canvas.height = 400;
  canvas.width = 200;
  canvas.style.background = '#d3d3d3';
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  activeTetrandom.map((obj) => {
    fillActiveBlock(obj.x, obj.y, ctx);
  });
  inactiveTetrandoms.map((obj) => {
    fillInactiveBlock(obj.x, obj.y, ctx);
  });
}

export default iterateScreenToDraw;
