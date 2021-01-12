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
      newCell.className = "cell transparent";
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
  console.log($(this).addClass(color.value).removeClass('transparent'))
})


//Allows user to fill in any uncolored cells with a color
$(".fill-button").click(function (){
  let c = document.getElementById('fill-cells')
  $('.row').children().each(function () {
      if ($(this).hasClass('transparent')) {
          $(this).css('background-color', c.value)
          console.log($(this).addClass(c.value).removeClass('transparent'))
      }
  })
})

//Allows user to fill in all cells with a color
$(".fill-all-button").click(function (){
  let c = document.getElementById('fill-all-cells')
  $('.row').children().each(function () {
          $(this).css('background-color', c.value);
          $(this).addClass(c.value);
  })
})