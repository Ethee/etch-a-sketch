//creates a square grid with the column
//and row size defined by square
function createSketch(square){
    const playArea = document.querySelector('#playArea');
    playArea.style.setProperty('--grid-row', square);
    playArea.style.setProperty('--grid-col', square);
    for(let i = 0; i < (square * square); i++){
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', colorSketch);
        playArea.appendChild(cell).className = 'sketch';
    };
}
function colorSketch(){
}
function initSketch(){
}
