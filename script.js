var colCount = 2; //keep count of our columns, starts with 2.
function addRow(){
    var grid = document.getElementById("grid");
    var row = document.createElement("tr");
    row.classList.add("row");
    grid.appendChild(row);
    for(var i=0;i<colCount;i++){ //adds an entire row of cells based on how many column currently in grid
        var cell = document.createElement("td");
        row.appendChild(cell);
        clickColor(cell); //lets the cell be able to be colored when clicked
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
        //col[i].childElementCount is the same as how many columns there are
        colCount=col[i].childElementCount; //keep count of the columns, so when we add rows it will keep making cells in that row until its correspondant
        clickColor(cell);
    }
}
function removeCol(){//remove the last added column when button is pressed
    var grid = document.getElementById("grid");
    var row = document.getElementsByClassName("row");
    var col = Array.from(row);  //copies the row object and making a row of columns/cells
    for(var i=0;i<col.length;i++){ //keep adding cells to the row of columns/cells
        if(col[i].childElementCount>2||grid.childElementCount>1){ //can't remove the row/column you start with
            col[i].removeChild(col[i].lastElementChild); //continuously removing last column of the last row
            //col[i].childElementCount is the same as how many columns there are
            colCount=col[i].childElementCount; //keep count of the columns, so when we add rows it will keep making cells in that row until its correspondant
        }
    }               
}
var color = ""; 
function clickColor(td){ 
    function changeColor(){
        td.style.backgroundColor = color;
    }
    td.addEventListener("click", changeColor);
}