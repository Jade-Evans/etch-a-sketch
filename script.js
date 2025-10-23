//GLOBAL VARIABLES//
const headers = document.querySelector(".headers");
const mainContentContainer = document.querySelector(".mainContentContainer");
const gridContainer = document.querySelector(".gridContainer");
const changeGridContainer = document.createElement("div");
changeGridContainer.classList.add("changeGridContainer");

const instruction = document.createElement("p");
instruction.textContent = "Click the button below if you'd like to change the number of pixels per size (max.100x100px)";
instruction.classList.add("instruction");
const changeGridBtn = document.createElement("button");
changeGridBtn.textContent = "SET GRID SIZE";
changeGridBtn.classList.add("changeGridBtn");
changeGridContainer.appendChild(instruction);
changeGridContainer.appendChild(changeGridBtn);
mainContentContainer.prepend(changeGridContainer);


//ESTABLISH DEFAULT 16X16 GRID TO APPEAR ON LOADING//
    
    const createGrid = function(x){
        let totalSquares = 0;
        while (totalSquares < x*x){
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("squareDiv");
            squareDiv.style.width = `calc(100%/${x})`;
            squareDiv.style.height = `calc(100%/${x})`;
            gridContainer.appendChild(squareDiv);
            totalSquares +=1;
        }
        console.log(`${totalSquares} squares have been added to make a ${x} x ${x} grid`);
        return;
    };
createGrid(16);

//CREATE HOVER EFFECT FUNCTION//
const hoverEffect = function(array){
    array.forEach((square)=>{
        square.addEventListener("mouseover",()=>
            square.style.backgroundColor="purple"
        )
    });
};

//CREATE ARRAY FOR DEFAULT GRID AND CALL HOVEREFFECT FUNCTION//
let allSquares = document.querySelectorAll(".squareDiv");
let allSquaresArray = Array.from(allSquares);
hoverEffect(allSquaresArray);

//ADD EVENT LISTENER TO BUTTON TO TRIGGER PROMPT LOGIC//
changeGridBtn.addEventListener("click",()=>{
        gridContainer.innerHTML="";
        let promptButton = prompt("Please enter number of squares: ");
        y = parseInt(promptButton);
        let newtotalSquares = 0;
        while (newtotalSquares < y*y){
            let newDiv = document.createElement("div");
            newDiv.classList.add("newDiv");
            newDiv.style.width = `calc(100%/${y})`;
            newDiv.style.height = `calc(100%/${y})`;
            gridContainer.appendChild(newDiv);
            newtotalSquares +=1;
        }
        console.log(`${newtotalSquares} squares have been added to make a ${y} x ${y} grid`);
        let newSquares = gridContainer.querySelectorAll(".newDiv");
        let newSquaresArray = Array.from(newSquares);
        console.log(newSquaresArray);
        hoverEffect(newSquaresArray);             
});




    
    
    


