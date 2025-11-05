# LEARNING NOTES FROM CREATING THE UNIFORM GRID USING FLEXBOX

## General Approaches
- Stick to the brief (don't try to embellish) – this caused unexpected challenges on previous rock/paper/scissors project and detracted a bit from the learning focus.
- Read through the whole instructions more carefully and use PseudoCode to plan out the whole approach rather than jumping in headfirst.
- Keep JS ordered aka use comments to define separate areas of code, keep global variables together at the top, make variables descriptive but not too long/similar to each other, keep variable names and class names similar/same
- Assign classLists immediately after createElement
- Use CSS rather than JS where possible for styling to avoid messy JS
- Use dev tools often to debug
- Commit and update README/LEARNINGLOG often to avoid overwhelm later on – keep it concise.

## Initial Approaches
- I was able to create the initial container and assign it a reference easily in JS.
- I knew creating the grid would involve a loop as it involved some sort of repetition (looping and adding the same squares each time).
- As the number of iterations was known and based on a condition (aka stop producing squares after a certain number), I deduced I could use a "while" loop (rather than a for loop).
- I created a while loop that stated whilst totalScore < 256, square divs would continue to be appended to the container and the total would increment by 1 each time. 

# PROBLEM SOLVING/DEBUGGING ERRORS

## LEARNING NOTES FROM CREATING THE INITIAL GRID
## Issue: Only One Square Was Appended to Grid Container:
- *Error*: I initially created the squareDiv element outside the loop. As a result, only one square was appended — the same element was reused each time, rather than creating new ones.
- *Solution*: I moved document.createElement("div") inside the loop. This ensures a new squareDiv is created on each iteration, allowing multiple squares to be appended to the grid.
- *Reflection/Key Takeaways*: This helped me understand that DOM elements are objects i.e. if you reuse the same one, you're not creating new nodes, just moving the same one around.
## Issue: Getting the Squares to Fit Inside the Container
- *Error*: I tried to approach this in several different ways that involved initially trying to define a specific pixel width and depth of the squares. I thought I could force the width and depths to change via flex grow/shrink/basis properties however these did not work as I expected:
.squareDiv {
  width: 1px;
  height: 1px;
  flex-grow: 1;
}
Squares stretched horizontally but collapsed vertically, even with flex-wrap: wrap because flex-grow distributes space along the main axis (horizontal), but doesn’t affect vertical sizing.
- *Solution*: I decided I needed to update my knowledge by searching online for relevant flexbox tutorials. I came across this short [YouTube Tutorial][1] in which it demonstrates the calc equation; this was not only useful for solving the 16×16 grid but could be adapted easily for the later part of the project (i.e. send the user a popup asking for the number of squares per side for the new grid).
.squareDiv {
  width: calc(100% / 16);
  aspect-ratio: 1 / 1;
}
- *Reflection/Key Takeaways*:
- When dealing with percentages for dimensions, this usually relates to the parent aka in the above, it's 100% of the squareDiv's parent (gridContainer) that is split by 16.
- aspect-ratio is good for keeping squares square!
- flex-grow works along the main axis only (even if wrap is specified).
- Dev Tools was useful for debugging as I was able to see in the elements panel whether the squares were being appended and by hovering over them see the size/behaviour of individual squares to try and analyse where I was going wrong.

## Issue: Undefined Calc Equation for Width/Height
- *Error*: I tried to define squareDiv.style.width = calc(100%/x) but this was undefined.
- *Solution*: I discovered calc() is actually a CSS string, so needed to be in quotations. I also needed template literals to obtain the value of x:
squareDiv.style.width = \calc(100% / ${x})``
- Reflections:
- calc() is a string so needs to be in quotation marks/backticks if including template literals.
- REMEMBER: Include spaces before and after the slash for valid CSS.

## Issue: The Calculation Didn't Work 
- *Error*: The prompt returns a string, so the calculation didn’t work.
- *Solution*: I needed to change the result into an integer using parseInt.
- Learning Reference: [Stack Overflow][2] 

## Issue: Prompt Repeated on each iteration
- *Error*: I originally put my prompt inside the loop, which caused the request for total squares to the user to repeat on each iteration.
- *Solution*: I moved the prompt request outside of the loop so it wouldn't repeat unnecessarily.
- *Reflection/Key Takeaways*: Make sure to analyse whereabouts in the scope/the order of different logic. Ask self: when/how often does this need to happen? Does this need to happen on every iteration aka: appending the squareDivs (yes = inside loop) / prompt to user (no, just once = outside loop).

# LEARNING NOTES FROM CREATING THE HOVER/PEN EFFECT
## Issue: forEach() method not working (on NodeList)
- *Error*: I originally tried to apply the forEach() method to the allSquares but this didn't have the desired effect.
- *Solution*: This had happened in a previous project and I realised I was applying an array method to a NodeList. I recalled learning about the Array.from() method in an earlier module so researched to refresh my understanding and applied to my code.
Learning Reference: [Stack Overflow][3] 

# LEARNING NOTES - ADDING A BUTTON TO THE PAGE FOR CHANGING GRID SIZE
## Issue: Needed to add button as first child
- Problem: I wanted to add the button to the top of the screen before the grid but appendChild didn't work.
- *Solution*: I looked up ways to solve this and came across this [Stack Overflow][4] article in which the discussion mentioned using prepend (parent.prepend(newChild)) – this worked perfectly.
- *Reflection/Key Takeaways*:
- Stack Overflow discussions prove very useful for problem solving.
- REMEMBER: It is parent.appendChild(newChild) but parent.prepend(newChild) to add at start.

# LEARNING LOG -  ASSIGNING CLICK EVENT LISTENER TO BUTTON
## Issue: User prompt initialising on page load (incorrect)
- *Error*: I realised that the prompt was happening too early in the flow i.e. before the button was clicked.
- *Solution*: After trying to manipulate the prompt/event listener scope several times it occurred to me to reread the guidance. I realised I needed to be starting off with an initial "default grid" of 16×16, so I altered my JS function to createDefaultGrid designed specifically for loading the 16×16 at the start without any prompt entry from the user.
- *Reflection/Key Takeaway*: Be sure to read the guidance for projects thoroughly as subtle nuances like this can cause confusion if interpreted incorrectly.

# LEARNING LOG - APPLYING THE HOVER EFFECT TO UPDATED GRIDS
## Issue: reusing existing default grid logic for updatd grid did not work as expected
- *Error/Problem*: As with my previous rock-paper-scissors project, I ran into trouble when trying to reuse the same logic for creating the hover effect in the updated grids as the initial. I tried several different ways to make this work with one function for both the initial and updated grids, from experimenting with moving instructions in and outside of scope to requerying the squareDivs, allSquaresArrays in the button Event Listener. However, I kept running into unexpected *Error*s, such as the squares/hover effect running outside the grid border or the hover effect not working at all.
- *Solution*: In the end I resolved to repeating the same logic for the event listener, and this worked. I still suspect that there is a cleaner way to do this using one function, however I am trying a new approach to learning whereby it is most important to get it to work, and then learn how to refine later.
- *Reflection/Key Takeaways*: Whilst it is useful to attempt cleaner approaches to code, I feel an approach of getting "any workable *Solution*" in favour of spending too long and getting bogged down with it is more beneficial at this stage of learning.

# LEARNING NOTES - ADDING PROMPT ENTRY RESTRICTIONS USING CONDITIONS IF...ELSE STATEMENTS
# Issue: incorrect entry messages only appear once/ incorrect number of pixels still executed
*Error*: using the condition y==NaN which never equals anything in JavaScript. 
*Solution*: Update the condition to isNan(y).
*Reflection*: REMEMBER NaN is never equal to anything, even itself. 

# Issue: entering multiple incorrect values still breaks the flow
*Error*: I didnt have the logic in place to deal with more than one incorrect answer and reprompt if needed:
INCORRECT CODE:
if(isNaN(y)){
            promptButton = prompt("Incorrect entry, please enter a number: ")
            y = parseInt(promptButton);
        }
        else if (y<10 || y>100 ){
            promptButton = prompt("Please enter a number between 10 and 100: ")
            y = parseInt(promptButton);
        }
*Solution*: Use a while loop to continue to prompt for a correct answer WHILE the entered number is outside of the required range aka isn't a number/isnt between 10 and 100. 
CORRECT CODE WITH WHILE LOOP:
while(isNaN(y)||y<10||y>100){
            if(isNaN(y)){
                promptButton = prompt("Incorrect entry, please enter a number: ")
            }
            else if (y<10 || y>100 ){
                promptButton = prompt("Please enter a number between 10 and 100: ")
                
            }
            y = parseInt(promptButton);
        }       
*Reflection*: I did need some AI assistance to reach this solution however I should have followed a hunch that if it is repeatable it probably requires a loop of some sort. Overall, if...else statements and while loops I am fairly solid with so just need practice thinking through the logic of combining these (pseudocode might have come in handy here!).

# LEARNING NOTES FROM EXTRA CREDIT - INCREASE HOVER OPACITY FEATURE
## Issue: only one opacity was coming out on hover. 
*Error (i)*: I was using rgb(a,b,c,d) not rgba(a,b,c,d) which is required for opacity property. 
*Error (ii*): I was using = for comparison in my condition statements instead of === for comparison.
INCORRECT CODE:
const hoverEffect = function(array){
    array.forEach((square)=>{
        square.addEventListener("mouseover",()=>{
            if(square.style.backgroundColor= "rgb(236, 245, 242)"){
                square.style.backgroundColor="rgb(1, 1, 1, 0.2)";
            }
            else if(square.style.backgroundColor="rgb(1, 1, 1, 0.2)"){
                square.style.backgroundColor="rgb(1, 1, 1, 0.4)";
            }
            etc.......
        })
    })
};

*Solution*: update rgb to rgba and = to ===.
*Reflection*: Remember comparison operators in JS require == or ===, = is for assigning. 

# LEARNING NOTES FROM HOVEREFFECT REFACTOR
## Issue: attempting to separate backgroundColor and opacity assignment broke the code.
*Error*: I was assigning the style.opacity in percentages instead of decimals up to 1.
*Solution*: Update opacity values to decimals.

# LEARNING NOTES FOR ESTABLISHING MASTER TOOLS AND COLOURS
## Selections were not updating
*Error*: I was declaring the masterTool and masterColour variables inside the event listener so they weren't globally declared and were undefined when trying to call the functions later on.
*Solution*: Declared variables globally:
let masterColour = "black";
let masterTool="paintbrush";

const tools = document.querySelectorAll(".toolClass");
tools.forEach((tool)=>{
    tool.addEventListener("change",()=>{
        if(tool.checked){
            masterTool=tool.value;
            console.log(`Master tool selected: ${masterTool}`);
        }
    })
})
const colours = document.querySelectorAll(".colourClass");
colours.forEach((colour)=>{
    colour.addEventListener("change",()=>{
        if(colour.checked){
            masterColour = colour.value;//masterColour is the variable name for each colour//
            console.log(`Master colour selected: ${masterColour}`);
        }
    })

});
# Default values not showing in UI
*Error*: I had no logic included to show the default colour and tool settings. 
*Solution*: I researched on google and found an article [Bulma][5] with a simple html update solution to show the default radio button (add checked to the end on its own i.e. no value assignment required):
<label ><input type="radio" name="colourOption" class="colourClass"  value="black" checked >Black</label><br>

# LEARNING REFERENCE LINKS:
[1]: https://www.youtube.com/watch?v=VKHmCDKIsf0
[2]: https://stackoverflow.com/questions/60713479/what-is-the-best-way-to-make-a-prompt-into-an-integer-in-js
[3]: https://stackoverflow.com/questions/3199588/fastest-way-to-convert-javascript-nodelist-to-array
[4]: https://stackoverflow.com/questions/2007357/how-to-set-dom-element-as-first-child
[5]: https://bulma.io/documentation/form/radio/#:~:text=You%20can%20check%20a%20radio,to%20the%20element.&text=You%20can%20disable%20a%20radio,%3E%20and%20the%20.







