const gridContr = document.querySelector('.grid-container');

function makeGrid(rows, col) {
    gridContr.style.setProperty('--grid-rows', rows);
    gridContr.style.setProperty('--grid-col', col);
    
    for (let x = 0; x < (rows * col); x++) {
        let boxItem = document.createElement('div')
        gridContr.appendChild(boxItem).className = 'square-div'
    }
}

makeGrid(16, 16);