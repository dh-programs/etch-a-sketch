const gridContainer = document.querySelector('#grid-container');

function createGrid(rowSize) {
    gridContainer.style.gridTemplateColumns = `repeat(${rowSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${rowSize}, 1fr)`;
    let gridContainerSize = gridContainer.offsetWidth;
    let boxSize = (gridContainerSize / rowSize) - 1;
    let boxSizePx = `${boxSize}px`;
    for (let i = 0; i < rowSize * rowSize; i++) {
        let divBox = document.createElement('div');
        divBox.classList.add('div');
        divBox.className = 'grid-boxes';
        divBox.style.height = boxSizePx;
        divBox.style.width = boxSizePx;
        divBox.style.maxWidth = boxSizePx;
        divBox.style.maxHeight = boxSizePx;
        gridContainer.append(divBox);
    }
    const gridBoxes = document.querySelectorAll('.grid-boxes');
    gridBoxes.forEach(gridBox => gridBox.addEventListener('mouseover', gridFill));
}

function removeGrid() {
    gridContainer.textContent = '';
}

createGrid(16);

function getSliderVal() {
    removeGrid();
    createGrid(this.value);
}

const gridSlider = document.querySelector('#grid-slider');
gridSlider.addEventListener('mouseup', getSliderVal);

const clearButton = document.querySelector('#btn-clear-grid');
clearButton.addEventListener('click', clearGrid);

const gridLineButton = document.querySelector('#btn-grid-line');
gridLineButton.addEventListener('click', toggleGridLines);

let blackSelected = false;
const blackButton = document.querySelector('#btn-black');
blackButton.addEventListener('click', setFillColorBlack);

let vividsSelected = false;
const vividsButton = document.querySelector('#btn-vivids');
vividsButton.addEventListener('click', setFillColorVivids);

let pastelsSelected = false;
const pastelsButton = document.querySelector('#btn-pastels');
pastelsButton.addEventListener('click', setFillColorPastels);

let eraserSelected = false;
const eraserButton = document.querySelector('#btn-eraser');
eraserButton.addEventListener('click', setFillColorWhite);

//let customSelected = false;
//const colorPicker = document.querySelector('.color-picker');
//colorPicker.addEventListener('input', setFillColorCustom);

function gridFill() {
    if (pastelsSelected === true) {
        this.style.backgroundColor = setFillColorPastels();
    } else if (vividsSelected === true) {
        this.style.backgroundColor = setFillColorVivids();
    } else if (blackSelected === true) {
        this.style.backgroundColor = setFillColorBlack();
    } else if (eraserSelected === true) {
        this.style.backgroundColor = setFillColorWhite();
    } /*else if (customSelected === true) {
        this.style.backgroundColor = setFillColorCustom();
    }*/ else this.style.backgroundColor = setFillColorBlack();
}

function clearGrid() {
    const gridBoxes = document.querySelectorAll('.grid-boxes');
    gridBoxes.forEach(gridBox => gridBox.style.backgroundColor = 'white');
}

function toggleGridLines() {
    const gridBoxes = document.querySelectorAll('.grid-boxes');
    gridBoxes.forEach(gridBox => {
        if (gridBox.style.borderWidth === '0px') {
            gridBox.style.borderWidth = '1px';
        } else {
            gridBox.style.borderWidth = '0px';
        }
    });
}

let pastelColors = ['rgb(204,238,255)', 'rgb(204,255,230)', 'rgb(255,230,179)', 'rgb(255,212,204)', 'rgb(255,230,242)', 'rgb(230,204,255)', 'rgb(204,255,212)', 'rgb(255,247,204)'];
let vividColors = ['rgb(255,204,102)', 'rgb(179,255,102)', 'rgb(102,255,179)', 'rgb(102,255,255)', 'rgb(102,204,255)', 'rgb(102,153,255)', 'rgb(179,102,255)', 'rgb(255,128,255)', 'rgb(255,106,77)'];

function setFillColorVivids() {
    let i = Math.floor(Math.random() * vividColors.length);
    let fillColor = `${vividColors[i]}`;
    vividsSelected = true;
    blackSelected = false;
    pastelsSelected = false;
    eraserSelected = false;
    return fillColor;
}

function setFillColorPastels() {
    let i = Math.floor(Math.random() * pastelColors.length);
    let fillColor = `${pastelColors[i]}`;
    pastelsSelected = true;
    blackSelected = false;
    vividsSelected = false;
    eraserSelected = false;
    return fillColor;
}

function setFillColorBlack() {
    let fillColor = 'black';
    blackSelected = true;
    pastelsSelected = false;
    vividsSelected = false;
    eraserSelected = false;
    return fillColor;
}

function setFillColorWhite() {
    let fillColor = 'white';
    eraserSelected = true;
    blackSelected = false;
    pastelsSelected = false;
    vividsSelected = false;
    return fillColor;
}

/*
function setFillColorCustom() {
    //var x = document.getElementById("myColor").value; 
    //let fillColor = ;

    const colorPicker = document.querySelector('.color-picker');
    colorPicker.addEventListener('input', setFillColorCustom);

    let fillColor = `${colorPicker.value}`;
    console.log(fillColor);
    customSelected = true;
    eraserSelected = false;
    blackSelected = false;
    pastelsSelected = false;
    vividsSelected = false;
    return fillColor;
}
*/