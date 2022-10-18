//Create a button listener that will prompt the user to enter a number
    //Store that number as a variable that will be used to create the dimensions of the grid (16 = 16x16 grid);

//Create a loop function 

//Creates a grid
const padContainer = document.getElementById('padcontainer');
function createGrid(dimension){
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