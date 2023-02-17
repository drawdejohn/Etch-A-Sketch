const container = document.getElementById("container");

// Create a 16x16 square grid and append them to the container
for (let i = 0; i < 16 * 16; i++) {
	const square = document.createElement("div");
	square.classList.add("square");
	container.appendChild(square);
}

// Add a hover event listener to each square
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'black';
  });
});