/*
Cameron Scott
WPF Section 1
May 14, 2014
Expressions Wacky
 */

// Lets combine random numbers

//Prompt for first number
var first = prompt("Enter a number:");
var second = prompt("Enter a second number:");
var third = prompt("Enter a third number:");
var firstString = first;
var secondString = second;
var thirdString = third;

var complete = String(firstString)+String(secondString)+String(thirdString);
console.log(complete);
alert("The three numbers combined are: "+complete+".");