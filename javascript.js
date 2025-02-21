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

