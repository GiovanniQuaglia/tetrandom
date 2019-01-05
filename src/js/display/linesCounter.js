function updatesLinesCounter (linesCounter) {
  const counter = document.getElementById('counter');
  if(counter) {
    counter.innerHTML = `Lines: ${linesCounter}`;
  }
}

export {updatesLinesCounter};
