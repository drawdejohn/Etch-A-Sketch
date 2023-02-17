const container = document.getElementById("container");

// Create a 16x16 square grid and append them to the container
function createGrid(numSquares) {
  container.innerHTML = ""; // Clear previous grid
  container.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`;
  for (let i = 0; i < numSquares ** 2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
}

// Add a hover event listener to each square
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'black';
  });
});


createGrid(16);