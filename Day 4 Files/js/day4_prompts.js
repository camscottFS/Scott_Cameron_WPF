/*
Cameron Scott
WPF Section 1
Day 4 Prompts
 */

//Prompting for user information

//prompt("Enter your year of birth:");

//Capture the information the user provides

//var userInput = prompt("Enter your birth year:");
//console.log(userInput);

//Prompt and explain to the user what we are actually doing
//Prompt the user for a width and calculate the area of a rectangle with it

var width = prompt("Let's calculate the area of a rectangle. \nPlease enter a width:");
var height = prompt("Please enter a height:");

//Area of a rectangle - width * height

var area = width * height;
console.log("The area of your rectangle is "+area+".");
alert("The area of your rectangle is "+area+".");

//Create a variable to hold the whole string of an answer

var result = "The area of a rectangle with a width of "+width+ " and a height of " + height+ " is "+area+".";
console.log(result);
alert(result);