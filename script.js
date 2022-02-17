const gridContr = document.querySelector('.grid-container');

let btn = document.querySelector('.btn');

//default to 16x16 square grid first
makeGrid(16, 16);
let sqrBoxes = document.querySelectorAll('.square-div');
sqrBoxes.forEach(box => {
    box.addEventListener('mouseover', function(e) {
        colorToAssign = createColor();
        e.target.style.backgroundColor = colorToAssign;


        setTimeout(function() {
            e.target.style.backgroundColor = "";
            }, 500);
    })
})

btn.addEventListener('click', () => {

    resetGrid();
    
    let sqrsPerSide = prompt('Enter the number of square to generate per sides')
    makeGrid(sqrsPerSide, sqrsPerSide);


    let sqrBoxes = document.querySelectorAll('.square-div');
    sqrBoxes.forEach(box => {
        box.addEventListener('mouseover', function(e) {
            colorToAssign = createColor();
            e.target.style.backgroundColor = colorToAssign;
    
    
            setTimeout(function() {
                e.target.style.backgroundColor = "";
              }, 500);
        })
    })
})

function resetGrid() {
    let resetSqrBoxes = document.querySelectorAll('.square-div');
    resetSqrBoxes.forEach(box => {
        box.remove();
    })
}

function makeGrid(rows, col) {
    gridContr.style.setProperty('--grid-rows', rows);
    gridContr.style.setProperty('--grid-col', col);
    
    for (let x = 0; x < (rows * col); x++) {
        let boxItem = document.createElement('div')
        gridContr.appendChild(boxItem).className = 'square-div'
    }
}

function createColor() {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
    let ranColor = '#';

    for (let x = 0; x < 6; x++) {
        let ranElement = Math.floor(Math.random() * 16);
        ranColor += arr[ranElement];
    }
    
    return ranColor;
}