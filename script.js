// initial num of rows and columns
// incremented when "add" functions are called, in order to keep track of grid
let numOfRows = 1;
let numOfCols = 1;

// addRow: Allows user to add another row to our grid
function addRow(){
    let grid = document.getElementById('grid');
    let newRow = document.createElement("tr");  //creates row


    for(let i = 0; i < numOfCols; i++) {    //fills the row based on number of columns
        let cell = document.createElement("td");
        newRow.appendChild(cell);
    }
    grid.appendChild(newRow);   //adds the created row to our grid
    numOfRows++;    //increments number of rows for future reference
}

// addCol: Allows user to add another column to our grid
function addCol(){
    let rows = document.querySelectorAll("tr"); //creates nodeList of current rows
    let rowIndex = 0;

    for(let i = 0; i < numOfRows; i++) {            //loops through the number of row nodes, 
        let cell = document.createElement("td");    //creating a cell for each node
        rows[rowIndex].appendChild(cell);           // and adding it to the grid
        rowIndex++;
    }
    numOfCols++;    //increments number of cols for future reference.
}