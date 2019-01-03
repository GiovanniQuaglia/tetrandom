import { linesCounter } from '../movements/clearLine';

function updatesLinesCounter () {
  const counter = document.getElementById('counter');
  counter.innerHTML = `Lines: ${linesCounter}`;
}

export {updatesLinesCounter};
