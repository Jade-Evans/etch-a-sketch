//GLOBAL VARIABLES//
const gridContainer = document.querySelector(".gridContainer");
const changeGridBtn = document.createElement("button");
changeGridBtn.textContent = "CLICK TO CHANGE GRID";
changeGridBtn.classList.add("changeGridBtn");
document.body.prepend(changeGridBtn);

//FUNCTION WITH WHILE LOOP TO PROMPTED NUMBER OF SQUARE DIVS//
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

//LOGIC FOR HOVER EFFECT//
let allSquares = document.querySelectorAll(".squareDiv");
let allSquaresArray = Array.from(allSquares);
allSquaresArray.forEach((square)=>{
    square.addEventListener("mouseover",()=>
        square.style.backgroundColor="green"
    )
});