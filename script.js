const etchContainer = document.querySelector("#etch-container");

function makeDivs(gridSquares) {
for (i = 0; i < (gridSquares ** 2); i++) {
    const div = document.createElement('div');
    etchContainer.appendChild(div);
}
  etchContainer.style.gridTemplateColumns = `repeat(${gridSquares}, auto)`;
  etchContainer.style.gridTemplateRows = `repeat(${gridSquares}, auto)`;
};

makeDivs(16);

const divs = etchContainer.querySelectorAll('div');
divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    });
});

const clearBtn = document.createElement('button');
clearBtn.textContent = 'New Grid';
document.body.appendChild(clearBtn);

clearBtn.addEventListener('click',function () {
    divs.forEach((div) => {
        etchContainer.removeChild(div);
    });
    makeDivs(parseInt(prompt('How many squares per row?')));
});

// Button event makes new divs, but only works once and divs lack color-change event