//BUG FIXES
//Make it so that the prompt for the grid dimensions is a seperate function and doesn't get called during the default createGrid function

    const padContainer = document.getElementById('padcontainer');
    
    let mouseDown = false;
    document.body.onmousedown = () => (mouseDown = true);
    document.body.onmouseup = () => (mouseDown = false); //This is to set up the ability to only draw when mouse is clicked down
    
    let gridSize = 16;
    populateGrid(gridSize); //Start with a default grid size of 16x16
    function createGrid(dimension){
    if (dimension != null){
        populateGrid(dimension);
        gridSize = dimension;
    } else {
        populateGrid(gridSize);
    }};
            
function populateGrid(dimension){
    for (let i = 0; i< dimension; i++){
        let createRow = document.createElement('div');
        createRow.classList.add('row');
        padContainer.appendChild(createRow);
            for (let i = 0; i<dimension; i++){
                let createSquare = document.createElement('div');
                createSquare.classList.add('square');
                createRow.appendChild(createSquare);
                createSquare.addEventListener('mouseover', drawColor); 
                createSquare.addEventListener('mousedown', drawColor);
                }};
}

function drawColor(e) {
    if (e.type ==='mouseover' && !mouseDown) return;
    if (e.type ==='mouseover' && mouseDown){
        e.target.style.backgroundColor = 'black'; //You can add other options for colors here later
    }}; 

function deleteGrid(){
let child = padContainer.firstElementChild;
while (child){
    padContainer.removeChild(child);
    child = padContainer.firstElementChild;
}};

function getDimension(){
    let dimension = prompt('How many squared pixels would you like your canvas to be?');
    if (dimension != null){
        if (dimension > 100){
        alert('You must pick a number that is not higher than 100');
        dimension = prompt('How many squared pixels would you like your canvas to have?');
        } else {
        gridSize = dimension;
        return dimension; 
        }
    } else {
        return;
    }};

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', ()=> {
    let dimension = prompt('How many squared pixels would you like your canvas to be?');
    if (dimension != null){
        if (dimension > 100){
            alert('You must pick a number that is not higher than 100');
        }
        deleteGrid();
        createGrid(dimension)
    } else {
        return;
    };});