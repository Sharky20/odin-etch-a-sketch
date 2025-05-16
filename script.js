const container = document.querySelector(".container");
let size = 64;

for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("rowContainer");
    for (let j = 0; j < size; j++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.padding = `${20*16 / size}px`;
        square.addEventListener("mouseover", (e) => {
            square.classList.add("colored");
        });
        row.appendChild(square);
    }
    container.appendChild(row);
}