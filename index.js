const playArea = document.querySelector('#playArea');
//creates a square grid with the column
//and row size defined by square
function createSketch(square){
    playArea.style.setProperty('--grid-row', square);
    playArea.style.setProperty('--grid-col', square);
    for(let i = 0; i < square**2; i++){
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', colorSketch);
        cell.setAttribute('data-count', 10);
        playArea.appendChild(cell).className = 'sketch';
    };
}
const colorSketch = e => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let count = e.target.getAttribute('data-count');
    if(count == 10){ 
        e.target.style.backgroundColor = "#" + randomColor;
        count--;
        e.target.setAttribute('data-count', count);
    }
    else{
        e.target.style.filter = `brightness(${10 * count}%)`;
        count--
        e.target.setAttribute('data-count', count);
    }
}
function resetSketch(){
    let num = prompt("Please enter a size for your grid:");
    while(playArea.firstChild){
        playArea.removeChild(playArea.firstChild);
    }
    if(isNaN(num)){
        num = prompt("You must enter a number between 1-100:");
    }
    else if(num > 100 | num < 0){
        num = prompt("You must enter a number between 1-100:");
    }
    else{
        createSketch(num);
    }
}
    
function initSketch(){
    createSketch(16);
    const button = document.querySelector('#resetButton');
    button.addEventListener('click', resetSketch);
}
initSketch();
