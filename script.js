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
        if (gridBox.style.borderWidth === '1px') {
            gridBox.style.borderWidth = '0px';
        } else {
            gridBox.style.borderWidth = '1px';
        }
    });
}

function setFillColorBlack() {
    fillColor = 'black';
}

// choose from array of pastels
function setFillColorVivids() {
    fillColor = 'rgb(0, 255, 242)';
}

function setFillColorPastels() {
    fillColor = 'rgb(255, 150, 168)';
}