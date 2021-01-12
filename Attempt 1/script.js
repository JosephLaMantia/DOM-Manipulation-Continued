let rowCopy = document.querySelector("div.row").cloneNode(true);

//Allows user to add rows to grid
$("button.add-row").click(function () {
  addRow();
})

function addRow(){
  let newRow = rowCopy.cloneNode(true);
  document.querySelector("div.grid-container").appendChild(newRow);
}

//Allows user to add columns to grid
$("button.add-col").click(function () {
  addCol();
})

function addCol(){
  let rows = document.querySelectorAll("div.row");
  for(let i = 0; i < rows.length; i++){
      let newCell = document.createElement("div");
      newCell.className = "cell";
      rows[i].appendChild(newCell);
  }
}

//Allows user to delete rows from grid
$("button.delete-row").click(function () {
  deleteRow();
})

function deleteRow(){
  document.querySelector("div.grid-container").lastElementChild.remove();
}


$("button.delete-col").click(function () {
  deleteCol();
})

//Allows user to delete columns from grid
function deleteCol(){
  let rows = document.querySelectorAll("div.row");
  for(let i = 0; i < rows.length; i++){
      rows[i].lastElementChild.remove();
  }
}

//Allows user to change color of clicked cell based on selected color from dropdown menu.
$("div.cell").click(function () {
  console.log(this)
  let color = document.getElementById("colors");
  $(this).css("backgroundColor", color.value);
})