const container = document.querySelector(".container");
let gridSize = 64;
createGrid(64);

const promptBtn = document.querySelector("#prompt");
promptBtn.addEventListener("click", promptFunction);

const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", () => {resetGrid(); createGrid(gridSize)});

function promptFunction() {
    gridSize = prompt("Enter the grid size (just one number)");
    resetGrid();
    createGrid(gridSize);
}


function createGrid(size) {
    for (i=1; i<=size; i++) {
        const verticalContainer = document.createElement("div");
        verticalContainer.style.cssText = "";
        verticalContainer.classList.add("verticalContainer");
        container.appendChild(verticalContainer);
        for (j=1; j<=size; j++) {
            const pixel = document.createElement("div");
            pixel.style.cssText = "";
            pixel.classList.add("pixel");
            pixel.setAttribute("id", `${i}*${j}`);
            verticalContainer.appendChild(pixel);
        }
    }
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", (e) => {e.target.style.background = "white"})
    })
}

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }  
}


