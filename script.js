//GLOBAL VARIABLES//
const headers = document.querySelector(".headers");
const mainContentContainer = document.querySelector(".mainContentContainer");
const gridContainer = document.querySelector(".gridContainer");
const changeGridBtn = document.createElement("button");
changeGridBtn.textContent = "CLICK TO SPECIFY NO. OF PIXELS IN GRID";
changeGridBtn.classList.add("changeGridBtn");
mainContentContainer.prepend(changeGridBtn);


//FUNCTION WITH WHILE LOOP TO PROMPTED NUMBER OF SQUARE DIVS//

    // let x;
    
    // changeGridBtn.addEventListener("click",()=>{
        
    //     let promptButton = prompt("Please enter number of squares: ");
    //     x = parseInt(promptButton);
    
    // })
    let totalSquares=0;
    let startNum=16;
    const createDefaultGrid = function(startNum){
    while (totalSquares < startNum*startNum){
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");
        squareDiv.style.width = `calc(100%/${startNum})`;
        squareDiv.style.height = `calc(100%/${startNum})`;
        gridContainer.appendChild(squareDiv);
        totalSquares +=1;
    }
    console.log(`${totalSquares} squares have been added to grid`);
    return;
};
createDefaultGrid(startNum);

//LOGIC FOR HOVER EFFECT//
let allSquares = document.querySelectorAll(".squareDiv");
let allSquaresArray = Array.from(allSquares);
allSquaresArray.forEach((square)=>{
    square.addEventListener("mouseover",()=>
        square.style.backgroundColor="purple"
    )

});