//Create a button listener that will prompt the user to enter a number
    //Store that number as a variable that will be used to create the dimensions of the grid (16 = 16x16 grid);

//Create a loop function 

//Creates a grid
const padContainer = document.getElementById('padcontainer');
function createGrid(dimension){
    dimension = prompt('How many pixels would you like your canvas to have?');
    if (dimension > 100){
        alert('You must pick a number that is not higher than 100');
        dimension = prompt('How many pixels would you like your canvas to have?');
    }
    for (let i = 0; i< dimension; i++){
        console.log(`creating row ${i}`)
    let createRow = document.createElement('div');
    createRow.classList.add('row');
    padContainer.appendChild(createRow);
        for (let i = 0; i<dimension; i++){
            console.log(`creating square ${i}`);
            let createSquare = document.createElement('div');
            createSquare.classList.add('square');
            createRow.appendChild(createSquare);
        };
    };
};

function deleteGrid(){
    let child = padContainer.firstElementChild;
    while (child){
        padContainer.removeChild(child);
        child = padContainer.firstElementChild;
    }
}

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', ()=> {
    deleteGrid();
    createGrid();
})