## LEARNING NOTES FROM CREATING THE UNIFORM GRID USING FLEXBOX ##

# General Approaches #
- Stick to the brief (don't try to embellish) - this caused unexpected challenges on previous rock/paper/scissors project and detracted a bit from the learning focus. 
- Read through the whole instructions more carefully and Use PseudoCode to plan out the whole approach rather than jumping in headfirst. 
- Keep JS ordered aka use comments to define separate areas of code, keep global variables together at the top, make variables descriptive but not too long/similar to each other, keep variable names and class names similar/same
- Assign classLists immediately after createElement
- Use CSS rather than JS where possible for styling to avoid messy JS
- Use dev tools often to debug
- Commit and Update README/LEARNINGLOG often to avoid overwhelm later on - keep it concise. 

# Initial Approaches #
- I was able to create the initial container and assign it a reference easily in JS.
- I knew creating the grid would involve a loop as it involved some sort of repetition (looping and adding the same squares each time).
- As the number of iterations was known and based on a condition (aka stop producing squares after a certain number), I deduced I could use a "while" loop (rather than a for loop). 
- I created a while loop that stated whilst totalScore <256 the 

# Issue 1: Only One Square Was Appended #
- *Error*: I initially created the squareDiv element outside the loop. As a result, only one square was appended — the same element was reused each time, rather than creating new ones.
- *Solution*:I moved document.createElement("div") inside the loop. This ensures a new squareDiv is created on each iteration, allowing multiple squares to be appended to the grid.
- *Reflection*:This helped me understand that DOM elements are objects i.e. if you reuse the same one, you're not creating new nodes, just moving the same one around.


# Issue 2: Getting the squares to fit inside the container #
- *Error*: I tried to approach this in several different ways that involved initially trying to define a specific #pixel# width and depth of the squares. I thought I could force the width and depths to change via flex grow/shrink/basis properties however these did not work as I expected: 
Initial attempt:
.squareDiv {
  width: 1px;
  height: 1px;
  flex-grow: 1;
}
Squares stretched horizontally but collapsed vertically, even with flex-wrap: wrap because flex-grow distributes space along the main axis (horizontal), but doesn’t affect vertical sizing.
Solution: I decided I needed to update my knowledge by searching online for relevant flexbox tutorials. I came across this short tutorial https://www.youtube.com/watch?v=VKHmCDKIsf0 in which it demonstrates the calc equation; this was not only useful for solving the 16 x 16 grid but could be adapted easily for the later part of the project (*i.e. send the user a popup asking for the number of squares per side for the new grid*).
.squareDiv {
  width: calc(100% / 16);
  aspect-ratio: 1 / 1;
}
*Reflections/Key Takeaways*:
- When dealing with percentages for dimensions, this *usually* relates to the parent aka in the above, its 100% of the squareDiv's parent (gridContainer) that is split by 16. 
- aspect ratio is good for keeping squares square!
- Flex-grow works along the main axis only (even if wrap is specified).
- Dev Tools was useful for debugging as I was able to see in the elements panel whether the squares were being appended and by hovering over them see the size/behaviour of individual squares to try and analyse where i was going wrong. 

# Undefined calc equation for width/height: #
I tried to define the squareDiv.style.width = calc(100%/x) but this was undefined. 
I needed template literals around the whole equation: `calc(100%/{x})`.

# The calculation didn't work initially because the prompt entry produces a string #
I needed to change the result into an integer using parseInt. 
I used the following link to remind myself of this: https://stackoverflow.com/questions/60713479/what-is-the-best-way-to-make-a-prompt-into-an-integer-in-js

# Prompt repeated as many times as squares #
*Error*: I originally put my prompt inside the loop, which caused the request for total squares to the user to repeat on each iteration. 
*Solution*: I moved the prompt request OUTSIDE of the loop so it wouldn't repeat unecessarily. 
*Reflection/Key Takeaways*: Make sure to analyse whereabouts in the scope/the order of different logic, ask self: when/how often does this need to happen? Does this need to happen on every iteration aka: appending the squareDivs (yes = inside loop)/prompt to user (no, just once = outside loop).

## LEARNING NOTES FROM CREATING THE HOVER/PEN EFFECT ##

# Changing Node Lists to Arrays to perform methods #
*Error*: I originally tried to apply the forEach() method to the allSquares  but this didn't have the desired effect. 
*Solution*: This had happened in a previous project and I realised I was applying an array method to a NodeList. I recalled learning about the Array.from() method in an earlier module so looked this up on https://stackoverflow.com/questions/3199588/fastest-way-to-convert-javascript-nodelist-to-array and applied to my code. 

## LEARNING NOTES FROM ADDING A BUTTON TO THE PAGE FOR CHANGING GRID SIZE ##
*"Problem"*: I wanted to add the button to the top of the screen BEFORE the grid but appendChild didn't work. 
*Solution*: I looked up ways to solve this and came across https://stackoverflow.com/questions/2007357/how-to-set-dom-element-as-first-child in which the discussion mentioned using "prepend" (parent.prepend(newChild)) - this worked perfectly. 
*Reflection/Key Takeaways*:
- Stack Overflow discussions prove very useful for problem solving. 
- REMEMBER: It is parent.appendChild(newChild) but parent.prepend(newChild) to add at start. 

