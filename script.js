//Your code goes here
console.log('Script ready');
// 1. Click the button to display your name
/* Ways to extend: prompt for user to enter their name in the text input, which then fills inputValue*/

//Selectors
const btnName = document.querySelector('#btnName');
const myName = document.querySelector('#myName');
let inputValue = '';

//Function
function nameOnClick (name) {
  inputValue = name;
  btnName.addEventListener('click', () => { //this is an anon function
    myName.setAttribute("value", inputValue);
  });
}

//Call the event
nameOnClick('Sarah');

//2. Switch lights on mouseover
//Selectors

//Function

//Call the event

//3. Double click to display content
//Selectors

/*Function {
  //some code here
  //create a new img element
}*/

//Call the event

// 4. Traffic Lights
//Selectors

//Function 1
//Function 2
//Function 3

//Call the events

//5. Change textbox border colours
//Selectors

//Function

//Call the event

//6. validate the box [length should be more than 5 characters]
//Selectors

/*Function {
  //if statement
}*/

//Call the event

// 7.create a list of hobbies
//Selectors

/*Function {
  //for loop
}*/

//Call the event

// 8. Display a profile card from an object
//Object

//Selectors

/*Function {
    //for loop
      //if statement
  }*/