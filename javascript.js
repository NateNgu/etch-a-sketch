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
}

sizeButton = document.getElementById("sizeButton");

// Create hover effect

const square = document.getElementsByClassName("square");

for (i = 0; i < square.length; i++) {
  square[i].addEventListener("mouseover", function () {
    this.style.backgroundColor = "gray";
  });
}
