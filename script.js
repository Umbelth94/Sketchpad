//BUG FIXES
//Make it so that the prompt for the grid dimensions is a seperate function and doesn't get called during the default createGrid function

    const padContainer = document.getElementById('padcontainer');
    
    let mouseDown = false;
    document.body.onmousedown = () => (mouseDown = true);
    document.body.onmouseup = () => (mouseDown = false); //This is to set up the ability to only draw when mouse is clicked down
    
    createGrid(16); //Start with a default grid size of 16x16
    function createGrid(dimension){
    if (dimension > 100){
        alert('You must pick a number that is not higher than 100');
        dimension = prompt('How many pixels (squared) would you like your canvas to have?');
    }
    for (let i = 0; i< dimension; i++){
    let createRow = document.createElement('div');
    createRow.classList.add('row');
    padContainer.appendChild(createRow);
        for (let i = 0; i<dimension; i++){
            console.log(`creating square ${i}`);
            let createSquare = document.createElement('div');
            createSquare.classList.add('square');
            createRow.appendChild(createSquare);
            createSquare.addEventListener('mouseover', drawColor); 
            createSquare.addEventListener('mousedown', drawColor);
            }};};
            
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
    return dimension; //Fix this later to make sure that 'null' doesn't create a blank canvas.
}

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', ()=> {
    deleteGrid();
    createGrid(getDimension());
});
