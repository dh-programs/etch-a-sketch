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