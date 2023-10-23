// enter your learnToCode folder and make a new folder called Workbook3, inside Workbook 3 make a folder called functions
// inside your functions folder make two files simple_functions.js and parametersPlayground.js
// Code along 10/23 Parameters Playground

function calcOnePlusTwo(){
    console.log(1+2);
}
calcOnePlusTwo();

// the statement for our incrementNumber function has the ability to pass values/data inside the parantheses this is called parameters
// num is our parameter that we're passing into incrementNumber

function incrementNumber(num){
    console.log(num+1);
}

// inside the invoke statement for incrementNumber we can pass data in the parantheses 
// these are called arguments. 

incrementNumber(3);
incrementNumber(42);