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
document.body.insertBefore(changeGridContainer,mainContentContainer);
let masterColour = "black";
let masterTool="pencil";

//INITIAL LOADED PAGE:
// A default 16x16 grid
// Logic for black and pencil selections using function applyToolEffect

//FUNCTIONS
//1. CREATE DEFAULT 16X16 GRID TO APPEAR ON LOADING//
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
    console.log(`master tool on load is ${masterTool}; master colour on load is ${masterColour}`)
    return;
};


//CREAT PAINTBRUSH EFFECT FUNCTION//
const paintbrushEffect = function(array){
    array.forEach((square)=>{
        square.addEventListener("mouseover",()=>
            square.style.backgroundColor=masterColour
        )
    });
};
//CREATE PENCIL EFFECT FUNCTION//
const pencilEffect = function(array){
    array.forEach((square)=>{
        square.addEventListener("mouseover",()=>{
            let colour = masterColour;
           if(square.style.backgroundColor===""){
                square.style.backgroundColor=colour;
                square.style.opacity="0.2";
            }
            else if(square.style.opacity==="0.2"){
                square.style.opacity="0.4";
            }
              else if(square.style.opacity==="0.4"){
                square.style.opacity="0.6";
            }
              else if(square.style.opacity==="0.6"){
                square.style.opacity="0.8";
            }
              else if(square.style.opacity==="0.8"){
                square.style.opacity="1";
            }
        })
    })
};
//REUSABLE FUNCTION TO APPLY TOOL EFFECT ON LOAD AND UPDATING GRID SIZE
const applyToolEffect = function(){
    let anyGrid = document.querySelectorAll(".squareDiv, .newDiv");
    let anyGridArray = Array.from(anyGrid);
    //IF PENCIL IS CHECKED.....//
    if(masterTool==="pencil"){
        pencilEffect(anyGridArray)
    }
    //IF PAINTBRUSH IS CHECKED.....//
    else if(masterTool==="paintbrush"){
        paintbrushEffect(anyGridArray);
    }
};

//EVENT LISTENERS
const tools = document.querySelectorAll(".toolClass");
tools.forEach((tool)=>{
    tool.addEventListener("change",()=>{
        if(tool.checked){
            masterTool=tool.value;
            console.log(`Master tool selected: ${masterTool}`);
            applyToolEffect();
        }
    })
});
const colours = document.querySelectorAll(".colourClass");
colours.forEach((colour)=>{
    colour.addEventListener("change",()=>{
        if(colour.checked){
            masterColour = colour.value;//masterColour is the variable name for each colour//
            console.log(`Master colour selected: ${masterColour}`);
        }
    })

});

//ADD EVENT LISTENER TO RESIZE BUTTON TO TRIGGER PROMPT LOGIC//
changeGridBtn.addEventListener("click",()=>{
    gridContainer.innerHTML="";
    let promptButton = prompt("Please enter how many your desired number of squares PER SIDE (min. 10, max. 100): ");
    let y = parseInt(promptButton);
    while(isNaN(y)||y<10||y>100){
        if(isNaN(y)){
            promptButton = prompt("Incorrect entry, please enter a number: ")
        }
        else if (y<10 || y>100 ){
            promptButton = prompt("Please enter a number between 10 and 100: ")    
        }
        y = parseInt(promptButton);
    };
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
    //REAPPLY TOOL EFFECT TO NEW GRID//
    applyToolEffect();                    
});

createGrid(16);
applyToolEffect();




    
    
    


