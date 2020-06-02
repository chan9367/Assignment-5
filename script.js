function addRow(){
    var grid = document.getElementById("grid");
    var row = document.createElement("tr");
    row.classList.add("row");
    grid.appendChild(row);
    var cell = document.createElement("td");
    row.appendChild(cell);
}
function removeRow(){
    var grid = document.getElementById("grid");
    var row = grid.lastElementChild;
    if(grid.childElementCount>1)grid.removeChild(row); //remove the last added row when button is pressed
}