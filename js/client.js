'use strict'                                          // sets the mode to strict to reveal all errors for debugging and learning purposes

const text = document.querySelector('body');          // declares a variable called text and assigns it the HTM element <body>
const button = document.querySelector('button');      // declares a variable called button and assigns it the HTML element <button>

button.addEventListener('click', function() {         //  indicates to run the block of code contained in the {} when the click event occurs for the <button> element

  text.classList.toggle('dark');                      
  
  if (button.innerText == "Click for Dark Mode") {                //  conditional statement to switch text of button depending on mode
    button.innerText = "Click for Light Mode";                    //  maybe better ways but trial and error led me here
  }
  else {
    button.innerText = "Click for Dark Mode";
  }

});
