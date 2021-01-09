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

