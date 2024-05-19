function showPrompt() {
    let size = 0;

    while (size <= 0 || size > 100) {
        size = parseInt(prompt("Please enter a new size for the grid. (max 100)"));
    }

    createGrid(size)
}

const container = document.querySelector('#container');
const btn = document.querySelector('button');
btn.classList.add("btn");
btn.addEventListener("click", showPrompt);
createGrid(4); // create initial grid on starting the webpage

function createGrid(size) {
    // clear the container first
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const fullSize = size*size

    // Expect maximum of 100x100 size
    for (let i=0; i<fullSize; i++) {
        const square = document.createElement('div');
        square.classList.add("square");
        square.style.opacity = "0";

        let h = (500 / size) - 2
        square.style.height = h.toString() + 'px'
        square.style.width = h.toString() + 'px'
        square.addEventListener("mouseenter", () => {
            if (!square.classList.contains("filled")) {
                let r = Math.floor(Math.random() * 256).toString()
                let g = Math.floor(Math.random() * 256).toString()
                let b = Math.floor(Math.random() * 256).toString()
                square.style.backgroundColor = `rgb(${r},${g},${b})`
                square.classList.add("filled")
            }
            let style = window.getComputedStyle(square)
            let op = Number(style.getPropertyValue("opacity"))
            if (op < 1) {
                op += 0.1
                square.style.opacity = op
            }
        });
        container.appendChild(square);
    }
}