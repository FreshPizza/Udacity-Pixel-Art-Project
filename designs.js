// Creating a target for the color picker
var pixelColor = document.querySelector('#colorPicker');

// Creating a target for the submit button
let submitButton = document.querySelector('#submit');

//designate grid location
let gridLocation = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
submitButton.addEventListener('click', function(event){
  let width = document.querySelector('#inputWidth').valueAsNumber;
  let height = document.querySelector('#inputHeight').valueAsNumber;
  event.preventDefault();
  makeGrid(height, width);
});

// Function to make grid, when called by submit button click event
function makeGrid(x, y) {
  //clears all HTML in the table, if present, to reset grid
  document.querySelector('table').innerHTML = '';
  //nested loops to create rows and columns
  for (var rows = 1; rows <= x; rows++) {
    gridLocation.insertAdjacentHTML('afterbegin', '<tr class = tableRow id = row' + rows + '></tr>');
    for (var columns = 1; columns <= y; columns++) {
      document.querySelector('#row' + rows).insertAdjacentHTML('afterbegin', "<td></td>");
      //adding an "on-click" event to every cell that replaces the background color with the currently selected pixel color
      document.querySelector('td').onclick = function(event){
        this.style.background = pixelColor.value;
      };
    }
  }
}
