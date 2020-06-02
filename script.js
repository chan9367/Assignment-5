var colCount = 2; //keep count of our columns, starts with 2.
function addRow(){
    var grid = document.getElementById("grid");
    var row = document.createElement("tr");
    row.classList.add("row");
    grid.appendChild(row);
    for(var i=0;i<colCount;i++){ //adds an entire row of cells based on how many column currently in grid
        var cell = document.createElement("td");
        row.appendChild(cell);
    }
    
}
function removeRow(){//remove the last added row when button is pressed
    var grid = document.getElementById("grid");
    var row = grid.lastElementChild;
    if(grid.childElementCount>1)grid.removeChild(row); //can't remove the row you start with
}
function addCol(){
    var grid = document.getElementById("grid");
    var row = document.getElementsByClassName("row");
    var col = Array.from(row);  //copies the row object and making a row of columns/cells
    for(var i=0;i<col.length;i++){ //keep adding cells to the row of columns/cells
        var cell = document.createElement("td"); 
        cell.classList.add("cell");
        col[i].appendChild(cell);
    }
    colCount++; //keep count of the columns, so when we add rows it will keep making cells in that row until its correspondant
}