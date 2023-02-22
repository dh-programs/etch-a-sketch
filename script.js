const container = document.querySelector('#container');

function createGrid(rowSize) {
    let containerSize = container.offsetWidth;
    let boxSize = containerSize / rowSize;
    let boxSizePx = `${boxSize}px`;
    for (let i = 0; i < rowSize; i++) {
        //let divBox = `grid${i}Box`;
        let divBox = document.createElement('div');
        divBox.classList.add('div');
        divBox.style.width = boxSizePx;
        divBox.style.height = boxSizePx;
        divBox.style.backgroundColor = 'white';
        divBox.style.borderStyle = 'solid';
        divBox.style.borderColor = 'black';
        divBox.style.borderWidth = '1px';
        container.append(divBox);
    }
}

createGrid(16);