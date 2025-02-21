const grid = document.querySelector(".grid-container");


for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    document.querySelector('.grid-container').appendChild(div);
};


const divs = document.querySelectorAll(".grid-container div"); 

divs.forEach(div => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = 'green';
    });
});


document.querySelector('#resize').addEventListener('click', () => {
    const resize = prompt("Enter new number of squares per side (max 100):")
    if (resize <= 100) {
        generateGrid(resize);
    };
});

function generateGrid(size) {
    const container = document.querySelector('.grid-container');
    container.innerHTML = '';

    const gridSize = 500;
    const squareSize = gridSize / size;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;

        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = 'green';
        });

        container.appendChild(div);
    };
};

















