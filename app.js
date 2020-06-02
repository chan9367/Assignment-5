//retrieve class column
const container = document.getElementsByClassName(col);
const container = document.getElementsByClassName(row);

function makeRows(rows, cols) {
  container.style.setProperty(`--grid-rows`, rows);
  container.style.setProperty(`--grid-cols`, cols);
  for (i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div"); // creates new cell
    cell.innerText = i + 1;
    container.appendChild(cell).className = "grid-item";
  }
}

var rowAmount = (addRow) => {};

makeRows(16, 16);
