const container = document.getElementById("container");

// Creates 16x6 grid

setGrid(16, 16);

function setGrid(rows, columns) {
  for (i = 0; i < rows; i++) {
    const row = document.createElement("div"); // Create a row
    row.classList.add("row");
    console.log(rows)
    container.appendChild(row);
    for (k = 0; k < columns; k++) {
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
