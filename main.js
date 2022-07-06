const container = document.querySelector(`.container`);
const button = document.querySelector(`.resetbutton`)
let mouseDown = false
let gridSize = 16;
container.style.setProperty(`--grid-rows`, gridSize);   
container.style.setProperty(`--grid-cols`, gridSize);
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

/*TODO
take care of negative prompts
eraser button
Random RGB value
*/
makeGrid(gridSize);
function makeGrid(gridSize) {
    if (gridSize > 100) {
        alert(`Grid size cannot be greater than 100`);
        return;
    }


    for (let i = 1; i < ((gridSize*gridSize)+1); i++) {
        const div = document.createElement(`div`)
        div.classList.add(`grid-cell`)
        div.setAttribute(`id`,`${i}`)
        //div.textContent = `${i}`
        console.log(`classname: ` + div.className + ` id: ` + div.getAttribute(`id`));
        div.style.cssText = `border: 1px solid black;width: ${600/gridSize}px; height: ${600/gridSize}px;`
        container.appendChild(div)
        const gridSelector = document.getElementById(`${i}`);
        gridSelector.addEventListener(`mouseover`, changeColor);
        gridSelector.addEventListener(`mousedown`, changeColor);
    
    }

}
function removeGrid(className) {
    const elements = document.getElementsByClassName(`grid-cell`);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0])
    }
    gridSize = parseInt(prompt(`Select a new grid size (up to 100)`));
    container.style.setProperty(`--grid-rows`, gridSize);
    container.style.setProperty(`--grid-cols`, gridSize);
    makeGrid(gridSize);
}
function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = `black`;
    
}
button.addEventListener(`click`, removeGrid);

