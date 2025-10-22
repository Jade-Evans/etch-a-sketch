//GLOBAL VARIABLES//
const gridContainer = document.querySelector(".gridContainer");


//WHILE LOOP TO APPEND 256 (16*16) SQUARE DIVS//
let x = parseInt(prompt("Please enter number of squares: "));
const addSquaresFunction = function(x){
    let totalSquares=0;
    while (totalSquares < x*x){
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");
        squareDiv.style.width = `calc(100%/${x})`;
        squareDiv.style.height = `calc(100%/${x})`;
        gridContainer.appendChild(squareDiv);
        totalSquares +=1;
    }
    console.log(`${totalSquares} squares have been added to grid`);
    return;
};
addSquaresFunction(x);
