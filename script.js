
const grid = document.getElementById("grid");
const cashoutBtn = document.getElementById("cashout");

function createGrid(rows, cols) {
    grid.innerHTML = "";
    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("click", () => {
            if (!cell.classList.contains("clicked")) {
                cell.classList.add("clicked");
            }
        });
        grid.appendChild(cell);
    }
}

cashoutBtn.addEventListener("click", () => {
    createGrid(3, 5);
});

// Initial render
createGrid(3, 5);
