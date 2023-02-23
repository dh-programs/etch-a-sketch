const gridContainer = document.querySelector('#grid-container');

function createGrid(rowSize) {
    let gridContainerSize = gridContainer.offsetWidth;
    let boxSize = Math.round(gridContainerSize / rowSize) - 1;
    let boxSizePx = `${boxSize}px`;
    console.log(`containerSize is ${gridContainerSize} and boxSizePx is ${boxSizePx}`)
    for (let i = 0; i < rowSize * rowSize; i++) {
        //let divBox = `grid${i}Box`;
        let divBox = document.createElement('div');
        divBox.classList.add('div');
        divBox.className = 'grid';
        divBox.style.height = boxSizePx;
        divBox.style.width = boxSizePx;
        divBox.style.maxWidth = boxSizePx;
        divBox.style.maxHeight = boxSizePx;
        gridContainer.append(divBox);
        console.log(`${divBox.offsetHeight} and ${divBox.offsetWidth}`);
    }
}

createGrid(12);