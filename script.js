const container = document.querySelector(".container");
const button = document.querySelector(".resetButton");
let size = 30;

function resizeGrid(newSize) {
    const oldGrid = Array.from(document.querySelectorAll(".rowContainer"));
    oldGrid.forEach((row) => row.parentElement.removeChild(row));

    for (let i = 0; i < newSize; i++) {
        let row = document.createElement("div");
        row.classList.add("rowContainer");
        for (let j = 0; j < newSize; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.padding = `${20*16 / newSize}px`;
            square.addEventListener("mouseover", (e) => {
                square.classList.add("colored");
            });
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

resizeGrid(size);

button.addEventListener("click", (e) => resizeGrid(prompt("How many squares wide for new grid?")));
