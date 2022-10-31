//Future plans
//Add a color picker
//Add a pixel slider
//Stylize the erase feature by having things fade out
//Add a shading option! 
//Have it draw on simple mouse clicks. 

const padContainer = document.getElementById('padcontainer');

const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('input',changeColor,false);
let divColor;
let isColorBlack = true;
// let divColor = colorPicker.value;

const blackButton = document.getElementById('black-ink');
blackButton.addEventListener('click',() => {
    isColorBlack = true;
});

function changeColor(e){
    divColor = colorPicker.value;
    isColorBlack = false;
    // e.target.style.backgroundColor = divColor;
};

// function toggleGrid(){
//     let borders = document.querySelectorAll('div');
//     for each(borders){

//     }
// }
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false); //This is to set up the ability to only draw when mouse is clicked down

let gridSize = 16;
let borderToggle = true;
populateGrid(gridSize); //Start with a default grid size of 16x16

// const squareWatcher = document.getElementsByClassName('square');
// function getSquareStats(squareWatcher){
//     console.log(squareWatcher.target.style.border);
// }

function populateGrid(dimension){
    for (let i = 0; i< dimension; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        padContainer.appendChild(row);
            for (let i = 0; i<dimension; i++){
                let square = document.createElement('div');
                square.classList.add('square');
                if (borderToggle == true){
                    square.classList.add('border');
                }
                row.appendChild(square);
                square.addEventListener('mouseover', drawColor); 
                square.addEventListener('mousedown', drawColor);
                }}};


const squares = document.getElementsByClassName('square');
const borderButton = document.getElementById('hide-borders');
borderButton.addEventListener('click',() => {
    if (borderToggle == true){
        for (i = 0; i<squares.length;i++){
        squares[i].classList.toggle('border');
        borderToggle = false;
    }}
    else if (borderToggle == false){
        for (i = 0; i<squares.length;i++){
            squares[i].classList.toggle('border');
            borderToggle = true;
    }}});



function drawColor(e) {
    if (e.type ==='mouseover' && !mouseDown) return;
    mouseDown = true;
    if (mouseDown){
        if (isColorBlack == true){
            e.target.style.backgroundColor = 'black';
        } else {
            e.target.style.backgroundColor = divColor;
        }}
    if (e.type ==='mouseover' && mouseDown){
        if (isColorBlack == true){
            e.target.style.backgroundColor = 'black';
        } else{
        e.target.style.backgroundColor = divColor;
        };
    };
    if (e.type ==='mouseover' && mouseDown && e.shiftKey){
        e.target.style.backgroundColor = 'white'; //Erase key
    }
    if (mouseDown && e.shiftKey){
        e.target.style.backgroundColor = 'white';
    }
}; 

function deleteGrid(){
    let child = padContainer.firstElementChild;
    while (child){
        padContainer.removeChild(child);
        child = padContainer.firstElementChild;
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
                    
                    

