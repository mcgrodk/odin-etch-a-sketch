const etchContainer = document.querySelector("#etch-container");

for (i = 0; i < 256; i++) {
    const div = document.createElement('div');
    etchContainer.appendChild(div);
}

const divs = etchContainer.querySelectorAll('div');
divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    });
});

const clearBtn = document.createElement('button');
clearBtn.textContent = 'New Grid';
document.body.appendChild(clearBtn);

clearBtn.addEventListener('click', () => {

    divs.forEach((div) => {
        div.style.backgroundColor = 'white';
    });

//Event not working below this line
    etchContainer.removeChild(divs);

    let newGridNum = parseInt(prompt('How many squares per row?'));
    
    for(i = 0; i < (newGridNum ** 2); i++) {
        const div = document.createElement('div');
        etchContainer.appendChild(div);
    }
});


//On button click:
//All existing divs are cleared (so that new divs aren't created in addition to old divs)