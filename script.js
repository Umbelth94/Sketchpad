//Future plans
//Add a color picker
//Add a pixel slider
//Stylize the erase feature by having things fade out
//Add a shading option! 

    const padContainer = document.getElementById('padcontainer');
    
    let mouseDown = false;
    document.body.onmousedown = () => (mouseDown = true);
    document.body.onmouseup = () => (mouseDown = false); //This is to set up the ability to only draw when mouse is clicked down
    
    let gridSize = 16;
populateGrid(gridSize); //Start with a default grid size of 16x16
            
function populateGrid(dimension){
    for (let i = 0; i< dimension; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        padContainer.appendChild(row);
            for (let i = 0; i<dimension; i++){
                let square = document.createElement('div');
                square.classList.add('square');
                row.appendChild(square);
                square.addEventListener('mouseover', drawColor); 
                square.addEventListener('mousedown', drawColor);
                }}};

function drawColor(e) {
    if (e.type ==='mouseover' && !mouseDown) return;
    if (e.type ==='mouseover' && mouseDown){
        e.target.style.backgroundColor = 'black'; //You can add other options for colors here later
    }
    if (e.type ==='mouseover' && mouseDown && e.shiftKey){
        e.target.style.backgroundColor = 'white'; //Erase key
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
    let dimension = checkIfValidNumber('How many squared pixels do you want your canvas?');
    if (dimension != null){
        if (dimension > 100){
            alert('You must pick a number that is not higher than 100');
        }
        deleteGrid();
        populateGrid(dimension);
        gridSize = dimension;
    } else {
        return
    }});


function checkIfValidNumber(promptQuestion){
    let isNumber;
    while (true){
        isNumber = prompt(promptQuestion);
        if (isNumber >100){
            alert('please enter a number lower than 100');
        }
        else if (isNumber === null){
            return null;
        }
        else if (Number.isSafeInteger(Number(isNumber)) === true && isNumber != ''){
            return isNumber;
        } else if (isNumber === ''){
            alert('Please enter a valid number');
        }
        else{
            alert('Please enter a valid number')
        }}};

const clearCanvas = document.getElementById('erase')
clearCanvas.addEventListener('click', ()=>{
    let confirmation = confirm('Are you sure you want to erase your masterpiece?');
    if (confirmation){
    deleteGrid();
    populateGrid(gridSize);
    }});