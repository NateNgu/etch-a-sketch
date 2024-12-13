const container = document.getElementById("container");

// Creates 16x6 grid

for (rows = 0; rows < 16; rows++) {
  const row = document.createElement("div"); // Create a row
  row.classList.add("row")
  container.appendChild(row);
  for (column = 0; column < 16; column++) { // Add 16 squares into the row
    const square = document.createElement("div");
    square.classList.add("square");
    row.appendChild(square);
  }
}

// Create hover effect

const square = document.getElementsByClassName("square");

for (i = 0; i < square.length; i++) {
  square[i].addEventListener("mouseover", function () {
    this.style.backgroundColor = "gray";
  });
}
