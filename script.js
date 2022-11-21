//Future plans
//Add a pixel slider
//Stylize the clear canvas feature by having things fade out
//Color pallet that populates as colors are selected, so the user can swap quickly between colors they have used
    //Potentially add a (favorites) button that fills up the colors with whatever the user favorites
//On button press for toggleables, have them switch a 'pressed' style until they are untoggled.

//BUGS
    //Cannot get border to stay unaffected by opacity changes (may not be possible?);


const padContainer = document.getElementById('padcontainer');

const colorPicker = document.getElementById('color-picker');
// let opacity = '0.2';
let divColor = 'rgba(0,0,0,1)'; //starts divColor as black with Opacity '1'
colorPicker.addEventListener('input',pickColor);
let toggleColor = false;
function pickColor(e){
    divColor = colorPicker.value;
    console.log(colorPicker.value);
    console.log(divColor);
    toggleBlack = false;
    toggleRainbow = false;
    rainbowOverwrite = false;
    toggleColor = true;
    blackButton.classList.remove('toggled');
    rainbowButton.classList.remove('toggled');
    overWriteButton.classList.remove('toggled');
    divColor = hexToRGBA(divColor, '1');
    // e.target.style.backgroundColor = divColor;
};
// let divColor = colorPicker.value;

let toggleBlack = true;
const blackButton = document.getElementById('black-ink');
blackButton.addEventListener('click',() => {
    if(toggleBlack == false){
        toggleBlack = true;
        blackButton.classList.add('toggled')
        console.log('toggleBlack is ' + toggleBlack);
        toggleRainbow = false;
        rainbowButton.classList.remove('toggled');
        overWriteButton.classList.remove('toggled');
        rainbowOverwrite = false;
        console.log('toggleRainbow is ' + toggleRainbow);
        divColor = 'rgba(0,0,0,' +opacity + ')';

    } else {
        blackButton.classList.remove('toggled');
        toggleBlack = false;
        console.log('toggleBlack is ' + toggleBlack)
    }
});

//divColor should be updated any time a color is used/changed;
    //Divcolor should be converted to rgba value
//Use rgba value to increase the opacity of the background colors instead of the borders
//ezpz
function hexToRGBA(hex, alpha){
    let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
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
        borderButton.classList.add('toggled');
        for (i = 0; i<squares.length;i++){
        squares[i].classList.toggle ('border');
        borderToggle = false;
    }}
    else if (borderToggle == false){
        borderButton.classList.remove('toggled');
        for (i = 0; i<squares.length;i++){ //SQUARES CAN BE TARGETED NOW USING THIS ARRAY METHOD THING
            squares[i].classList.toggle('border'); //SQUARES CAN BE TARGETED NOW USING THIS ARRAY METHOD THING
            borderToggle = true;
    }}}); //SQUARES CAN BE TARGETED NOW


let rainbowOverwrite = false;
const overWriteButton = document.getElementById('rainbow-overwrite');
overWriteButton.addEventListener('click',() =>{
    if (toggleRainbow == true){
    if (rainbowOverwrite == false){
        rainbowOverwrite = true;
        overWriteButton.classList.add('toggled');
        console.log('rainbow overwrite = ' + rainbowOverwrite);
    } else {
        rainbowOverwrite = false;
        overWriteButton.classList.remove('toggled');
        console.log('rainbow overwrite = ' + rainbowOverwrite);
    }}
    else {
        alert('You must turn on rainbow ink to use this feature');
    }
})
// let randomColor = Math.floor(Math.random()*16777215).toString(16);
const rainbowButton = document.getElementById('rainbow-ink');
let toggleRainbow = false;
rainbowButton.addEventListener('click',() =>{
    if(toggleRainbow == false){
        toggleRainbow = true;
        rainbowButton.classList.add('toggled');
        console.log('toggle rainbow = ' + toggleRainbow);
        toggleBlack = false;
        blackButton.classList.remove('toggled');
        console.log('isColorBlack is ' + toggleBlack);
        toggleColor = false;
    } else {
        toggleRainbow = false;
        rainbowButton.classList.remove('toggled');
        return;
    }});

let randomColor;
function generateRandomColor(){
    randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // divColor = hexToRGBA(randomColor, 1);
    console.log('random color converted = ' + randomColor);
    console.log('random color converted = ' + divColor);
    divColor = hexToRGBA(randomColor, '1');
    return divColor;
}

function valueToHex(a){
    let hex = a.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b){
    return '#' + valueToHex(r) + valueToHex(g) + valueToHex(b);
} //Trying out div color conversion to hex here

//Grab RGB values from the divColor (for the color picker);
function parseRGB(string){
    let rgbValues = string.split(',');
    console.log(rgbValues);
    rgbValues[0] = rgbValues[0].replace('rgb(','');
    rgbValues[1] = rgbValues[1].replace(' ','');
    rgbValues[2] = rgbValues[2].replace(' ','');
    rgbValues[2] = rgbValues[2].replace(')','');
    console.log(rgbValues);
    return rgbValues;    //Take out all the other junk so that I'm left with just the 3 numbers
};

function replaceRGBAOpacity(string,opacity){
    let rgbValues = string.split(',');
    rgbValues[3] = rgbValues[3] = (opacity.toString()+ ')');
    rgbValues = rgbValues.join(',');
    console.log('replaced opacity = ' + rgbValues);
    return rgbValues;
}



let toggleDropper = false;
const colorDropper = document.getElementById('color-dropper');
colorDropper.addEventListener('click',() => {
    if (toggleDropper == false){
        toggleDropper = true;
        toggleBlack = false;
        blackButton.classList.remove('toggled');
        toggleRainbow = false;
        rainbowButton.classList.remove('toggled');
        overWriteButton.classList.remove('toggled');
        toggleColor = true;
    } else {
        toggleDropper = false;
    }});

let shadingToggle = false;
const shadingButton = document.getElementById('shading');
shadingButton.addEventListener('click', () => {
    if (shadingToggle == false){
        shadingToggle = true;
        // divColor = replaceRGBAOpacity(divColor,'0.2');
        shadingButton.classList.add('toggled');
    } else {
        shadingToggle = false;
        shadingButton.classList.remove('toggled');
    }
    });

//Redo this function to reproduce the effects before we added string manipulation
function colorSquare(e,color,opacity){
    if (shadingToggle == true){
        // let opacity = getOpacity(e.target.style.backgroundColor);
        if (opacity < 1){
        // color = divColor;
        opacity += 0.2;
        opacity = opacity.toString();
        color = replaceRGBAOpacity(divColor, opacity);
        console.log(color);
        e.target.style.backgroundColor = color;
        // divColor = color;
        console.log(color);
        console.log(opacity);
        } 
        else if (opacity >= 1){
            e.target.style.backgroundColor = color;
        }}
    else {
        e.target.style.backgroundColor = divColor;
    }};

function dropperSelector(e){
    divColor = e.target.style.backgroundColor;
    console.log(divColor);
    let rgbArray = parseRGB(divColor);
    colorPicker.value = rgbToHex(+rgbArray[0], +rgbArray[1],+rgbArray[2]);
    toggleDropper = false;
    toggleColor = true;
    //Put divColor 
}
function getOpacity(bgColor){
    if (shadingToggle == true){
        if (bgColor == '' || bgColor == undefined){
            console.log('undefined');
            return 0.2;}
        else { 
            let a = bgColor.split(',');
            if (a[3] != undefined){
            a[3] = a[3].replace(' ','');
            a[3] = a[3].replace(')','');
            return +a[3];
            }
        else {
            return 1;
        }
        }}
    else {
        return 1;
    }
};

function drawColor(e) {
    // if (e.target.style.backgroundColor != 'undefined'){
        // } //Make sure that every bg color has opacity
        if (e.type ==='mouseover' && !mouseDown) return;
        mouseDown = true;
        if ((e.type ==='mouseover' && mouseDown) || (mouseDown)){
        let opacity = getOpacity(e.target.style.backgroundColor);
        // console.log(newOpacity);
        if (toggleBlack == true){
            colorSquare(e,divColor,opacity);
        }
        else if (toggleRainbow == true){ //Toggle Rainbow
            if (rainbowOverwrite == false){ //Rainbow overwrite off
                if (e.target.style.backgroundColor != '');{ //If the square isn't blank, do this
                    divColor = e.target.style.backgroundColor; //Sets randomcolor to match the color that 
                    colorSquare(e,divColor,opacity);
                }
                if (e.target.style.backgroundColor == 'white'){ //If the square has been 'erased'
                    divColor = generateRandomColor();
                    colorSquare(e,divColor,opacity);
                }
                if (e.target.style.backgroundColor ==''){ 
                    divColor = generateRandomColor();//If the square IS blank??? do this?
                    colorSquare(e,divColor,opacity);
                }
                else if (rainbowOverwrite == true){ //Rainbow overwrite on
                divColor = generateRandomColor();
                colorSquare(e,divColor,opacity);
                }
            }
            if (rainbowOverwrite == true){
                divColor = generateRandomColor();
                colorSquare(e,divColor,opacity);
            }
        }
        else if (toggleDropper == true){ //Color Copier
            dropperSelector(e);
        }    
        else if (toggleColor == true) { 
            console.log('color mode');
            console.log(divColor);//Selected Color
            colorSquare(e,divColor,opacity);
        };
        if ((e.type ==='mouseover' && mouseDown && e.shiftKey) || (mouseDown && e.shiftKey)){
            e.target.style.backgroundColor = '';
            e.target.style.opacity = 0.2;  //Erase key
        }}};



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
    
//This just checks if the user input from the prompt is a valid number, and prevents the canvas from being
//overwritten if the prompt is canceled or empty.
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
                    
                    

