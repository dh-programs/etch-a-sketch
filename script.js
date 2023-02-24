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
}

createGrid(16);

const gridBoxes = document.querySelectorAll('.grid-boxes');
gridBoxes.forEach(gridBox => gridBox.addEventListener('mouseover', gridFill));

const clearButton = document.querySelector('#btn-clear-grid');
clearButton.addEventListener('click', clearGrid);

const gridLineButton = document.querySelector('#btn-grid-line');
gridLineButton.addEventListener('click', toggleGridLines);

let fillColor = 'black';
const blackButton = document.querySelector('#btn-black-white');
blackButton.addEventListener('click', setFillColorBlack);

const vividsButton = document.querySelector('#btn-vivids');
vividsButton.addEventListener('click', setFillColorVivids);

const pastelsButton = document.querySelector('#btn-pastels');
pastelsButton.addEventListener('click', setFillColorPastels);

function gridFill() {
    this.style.backgroundColor = fillColor;
}

function clearGrid() {
    gridBoxes.forEach(gridBox => gridBox.style.backgroundColor = 'white');
}

function toggleGridLines() {
    gridBoxes.forEach(gridBox => {
        if (gridBox.style.borderWidth === '0px') {
            gridBox.style.borderWidth = '1px';
        } else {
            gridBox.style.borderWidth = '0px';
        }
    });
}

function setFillColorBlack() {
    fillColor = 'black';
}

let pastelColors = ['rgb(204,238,255)', 'rgb(204,255,230)', 'rgb(255,230,179)', 'rgb(255,212,204)', 'rgb(255,230,242)', 'rgb(230,204,255)', 'rgb(204,255,212)', 'rgb(255,247,204)'];
let vividColors = ['rgb(255,204,102)', 'rgb(179,255,102)', 'rgb(102,255,179)', 'rgb(102,255,255)', 'rgb(102,204,255)', 'rgb(102,153,255)', 'rgb(179,102,255)', 'rgb(255,128,255)'];

function setFillColorVivids() {
    let i = Math.floor(Math.random() * vividColors.length);
    fillColor = `${vividColors[i]}`;
}

function setFillColorPastels() {
    let i = Math.floor(Math.random() * pastelColors.length);
    fillColor = `${pastelColors[i]}`;
}