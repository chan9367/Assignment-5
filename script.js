function addRow(){
    var grid = document.getElementById("grid");
    var row = document.createElement("tr");
    row.classList.add("row");
    grid.appendChild(row);
    var cell = document.createElement("td");
    row.appendChild(cell);
}