const gridContr = document.querySelector('.grid-container');

let gridBtn = document.querySelector('.create-btn');
let clearBtn = document.querySelector('.clear-btn');
let mouseClicked = false;

//default to 16x16 square grid first
makeGrid(16, 16);
addSetOfEvents();



gridBtn.addEventListener('click', () => {

    resetGrid();
    
    let sqrsPerSide = prompt('Enter the number of square to generate per sides (Max is 100)');

    while (sqrsPerSide > 100) {
        sqrsPerSide = prompt('Enter a number that is not higher than 100');
    }

    makeGrid(sqrsPerSide, sqrsPerSide);

    addSetOfEvents();
})

clearBtn.addEventListener('click', () => {

    let sqrBoxes = document.querySelectorAll('.square-div');
    sqrBoxes.forEach(box => {
        box.style.backgroundColor = "#ffffff";
    })
})








function addSetOfEvents() {
    let sqrBoxes = document.querySelectorAll('.square-div');
    sqrBoxes.forEach(box => {

        //make grid boxes undraggable
        box.addEventListener('dragstart', (e) => {
            e.preventDefault();
        })
        //make grid boxes undraggable
        box.addEventListener('drop', (e) => {
            e.preventDefault
        })

        box.addEventListener('mousedown', function(e) {
            mouseClicked = true;
            
            colorToAssign = createColor();
            e.target.style.backgroundColor = colorToAssign;
    
        });
    
        box.addEventListener('mouseover', function(e) {
            if(mouseClicked) {
                colorToAssign = createColor();
                e.target.style.backgroundColor = colorToAssign;
            }
        });
    
        box.addEventListener('mouseup', function (e) {
            mouseClicked = false;
        });
    })
}

function resetGrid() {
    //removing boxes within div rows
    let resetSqrBoxes = document.querySelectorAll('.square-div');
    resetSqrBoxes.forEach(box => {
        box.remove();
    })

    //after removing boxes, remove div rows
    let resetRowCon = document.querySelectorAll('.row-container')
    resetRowCon.forEach(row => {
        row.remove();
    })
}

//Old: Making Grid using display: grid
//Update: Making Grid using display: flex
function makeGrid(col, rows) {
    for (let x = 0; x < col; x++) {
        let gridRow = document.createElement('div');

        for (let y = 0; y < rows; y++) {
            let boxItem = document.createElement('div');
            gridRow.appendChild(boxItem).className = 'square-div';
        }

        gridContr.appendChild(gridRow).className = 'row-container';
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