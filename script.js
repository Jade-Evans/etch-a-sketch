const gridContainer = document.querySelector(".gridContainer");
gridContainer.style.width = "560px";
gridContainer.style.height = "560px";
gridContainer.style.backgroundColor="blue";
gridContainer.style.border = "2px solid grey";
gridContainer.style.margin="auto";

const squareDiv = document.createElement("div");
squareDiv.classList.add("squareDiv");
squareDiv.style.backgroundColor = "grey";
squareDiv.style.border = "1px solid whitesmoke";
squareDiv.style.maxWidth="100%";

let num = 0;
while (num <= 16){
    gridContainer.appendChild(squareDiv);
    num +=1;
};
