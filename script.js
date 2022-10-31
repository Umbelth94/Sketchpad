//Future plans
//Add a pixel slider
//Stylize the clear canvas feature by having things fade out
//Add a shading option! 
//Color dropper/selecter
//

const padContainer = document.getElementById('padcontainer');

const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('input',pickColor,false);
let divColor;
// let divColor = colorPicker.value;

let toggleBlack = true;
const blackButton = document.getElementById('black-ink');
blackButton.addEventListener('click',() => {
    if(toggleBlack == false){
        toggleBlack = true;
        console.log('isColorBlack is ' + isColorBlack);
        toggleRainbow = false;
        console.log('toggleRainbow is ' + toggleRainbow);

    } else {
        toggleBlack = false;
        console.log('isColorBlack is ' + isColorBlack)
    }
});


function pickColor(e){
    divColor = colorPicker.value;
    console.log(divColor);
    toggleBlack = false;
    toggleRainbow = false;
    // e.target.style.backgroundColor = divColor;
};

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false); //This is to set up the ability to only draw when mouse is clicked down

let gridSize = 16;
let borderToggle = true;
populateGrid(gridSize); //Start with a default grid size of 16x16


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


let rainbowOverwrite = true;
const overWriteButton = document.getElementById('rainbow-overwrite');
overWriteButton.addEventListener('click',() =>{
    if (rainbowOverwrite == false){
        rainbowOverwrite = true;
        console.log('rainbow overwrite = ' + rainbowOverwrite);
    } else {
        rainbowOverwrite = false;
        console.log('rainbow overwrite = ' + rainbowOverwrite);
    }
})
// let randomColor = Math.floor(Math.random()*16777215).toString(16);
const rainbowButton = document.getElementById('rainbow-ink');
let toggleRainbow = false;
rainbowButton.addEventListener('click',() =>{
    if(toggleRainbow == false){
        toggleRainbow = true;
        console.log('toggle rainbow = ' + toggleRainbow);
        toggleBlack = false;
        console.log('isColorBlack is ' + toggleBlack);
    } else {
        return;
    }});

function generateRandomColor(){
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    return '#' + randomColor;
}

function drawColor(e) {
    if (e.type ==='mouseover' && !mouseDown) return;
    mouseDown = true;
    if ((e.type ==='mouseover' && mouseDown) || (mouseDown)){
        if (toggleBlack == true){
            e.target.style.backgroundColor = 'black';
        } 
        else if (toggleRainbow == true){
            if (rainbowOverwrite == false) {
                e.target.style.backgroundColor = generateRandomColor();
            }
            else if (rainbowOverwrite == true){
                if(e.target.style.backgroundColor == ''){ //Only draws over white space (make this a togleable function);
                e.target.style.backgroundColor = generateRandomColor();
            }}
        } else  { //Color picker color
            console.log('trying to draw color picked')
            e.target.style.backgroundColor = divColor;
        }};
        if ((e.type ==='mouseover' && mouseDown && e.shiftKey) || (mouseDown && e.shiftKey)){
            e.target.style.backgroundColor = ''; //Erase key
        }};

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
                    
                    

