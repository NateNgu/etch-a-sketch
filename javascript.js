const container = document.getElementById("container");

// Creates 16x6 grid

for (i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
}

// Create hover effect

const square = document.getElementsByClassName("square");

for (i = 0; i < square.length; i++) {
  square[i].addEventListener("mouseover", function () {
    this.style.backgroundColor = "gray";
  });
}
