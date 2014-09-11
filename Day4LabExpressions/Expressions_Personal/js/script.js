/*
Cameron Scott
WPF Section 1
09/10/14
Expressions: Personal
 */

// Let's calculate your monthly payment on the new Audi

alert("Let's calculate your auto loan's monthly payment!");
var car = prompt("What model is your car?");
var autoLoan = prompt("Please enter your total auto loan amount:");
// Prompt user for total auto loan amount
var loanLength = [48,60];
// Setting loanLength to an Array of 48 months and 60 months
var total1 = autoLoan/loanLength[0];
// Equation for a 48 month loan
var total2 = autoLoan/loanLength[1];
// Equation for a 60 month loan
console.log("Your "+car+"'s "+loanLength[0]+" month auto loan for $"+autoLoan+" was calculated to be $"+total1+" each month.");
// Console log the result with a 48 month loan
console.log("Your "+car+"'s "+loanLength[1]+" month auto loan for $"+autoLoan+" was calculated to be $"+total2+" each month.");
// Console log the result with a 60 month loan

