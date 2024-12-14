const container = document.getElementById("container");

// Creates 16x6 grid

const defaultSize = 16;

setGrid(defaultSize);

function setGrid(size) {
  for (i = 0; i < size; i++) {
    const row = document.createElement("div"); // Create a row
    row.classList.add("row");
    container.appendChild(row);
    for (k = 0; k < size; k++) {
      // Add 16 squares into the row
      const square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
    }
  }
  const square = document.getElementsByClassName("square");

  for (i = 0; i < square.length; i++) {
    square[i].addEventListener("mouseenter", function () {
      this.style.backgroundColor = "gray";
    });
  }
}

sizeButton = document.getElementById("sizeButton");

sizeButton.addEventListener("click", function () {
  let inputSize = prompt(
    "Enter in a grid size.\nThe number must be greater than 9 but no more than 100.\n(e.g. entering in 10 will set the grid to 10x10)"
  );
  if (inputSize > 100 || inputSize < 10) {
    alert("Invalid number, please try again.");
  } else {
    container.innerHTML = ""; // Remove default grid
    setGrid(inputSize);
  }
});
