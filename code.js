

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const gridLimit = 100;
const defaultGridSize = 16;

function initButtons() {
    const resetBtn = document.querySelector('#resize');
    resetBtn.addEventListener('click', () => {
        let newSize = parseInt(prompt("Enter a grid size between 1 and 100"));
        if(newSize && newSize > 0 && newSize < gridLimit + 1 ) {
            createGrid(newSize);
        }
    });

    const toggleBtn = document.querySelector('#toggle');
    toggleBtn.addEventListener('click', () => {
        if(toggleBtn.classList.contains('rainbow')){
            toggleBtn.classList.remove('rainbow');
        } else {
            toggleBtn.classList.add('rainbow');
        }
    });
}

function createGrid(gridSize) {
    const container = document.querySelector('#gridContainer');

    removeAllChildNodes(container);

    for(let y = 0; y < gridSize; y++)
    {
        const newRow = document.createElement('div');
        newRow.classList += 'row';
        
        for(let x = 0; x < gridSize; x++)
        {
            const newBlock = document.createElement('div');
            newBlock.classList += 'block';
            newBlock.addEventListener('mouseover', (event) => {
                const toggleBtn = document.querySelector('#toggle');
                if(toggleBtn.classList.contains('rainbow')) {
                // Random color
                    newBlock.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                } else {
                    newBlock.style.backgroundColor = 'black';
                }
            });
            newRow.appendChild(newBlock);
        }
        container.appendChild(newRow);
    }
}

initButtons();
createGrid(defaultGridSize);