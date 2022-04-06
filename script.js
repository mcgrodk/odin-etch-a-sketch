const etchContainer = document.querySelector("#etch-container");
const buttonContainer = document.querySelector('#button-container');
const blackModeBtn = document.querySelector('#black-btn');
const rainbowModeBtn = document.querySelector('#rainbow-btn');
const eraserBtn = document.querySelector('#eraser-btn');
const clearBtn = document.querySelector('#clear-btn');

let colorMode = 'black';

function makeDivs(gridSquares) {
for (i = 0; i < (gridSquares ** 2); i++) {
    const div = document.createElement('div');
    etchContainer.appendChild(div);
};
};

function formGrid(gridSquares) {
  
  makeDivs(gridSquares);
  
  etchContainer.style.gridTemplateColumns = `repeat(${gridSquares}, auto)`;
  etchContainer.style.gridTemplateRows = `repeat(${gridSquares}, auto)`;
  
   const divs = etchContainer.querySelectorAll('div');
    divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        changeColorMode(div);
    });
});
}

function changeColorMode(div) {
    if (colorMode == 'black') {
        div.style.backgroundColor = 'black';
        return;
    } else if (colorMode == 'rainbow') {
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        div.style.backgroundColor = '#' + randomColor;
        return;
    } else if (colorMode == 'eraser') {
        div.style.backgroundColor = 'white';
        return;
    }
}

formGrid(16);

blackModeBtn.addEventListener('click', () => {
    colorMode = 'black';
});

rainbowModeBtn.addEventListener('click', () => {
    colorMode = 'rainbow';
});

eraserBtn.addEventListener('click', () => {
    colorMode = 'eraser';
});

clearBtn.addEventListener('click', () => {
    etchContainer.innerHTML = '';
    let gridSquares = (parseInt(prompt('How many squares per row?')));
    if (gridSquares < 2) gridSquares = 2;
    if (gridSquares > 100) gridSquares = 100;
    if (gridSquares == null) return;
    formGrid(gridSquares);
});