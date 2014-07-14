/*
Cameron Scott
WPF Section 1
7-14-14
Expressions Industry
 */

//Industry

//Prompt user for adobe suite cost
var adobeSuite = prompt("Lets calculate how much the Adobe Suite and MacBook Pro will cost:" +
    "\nPlease enter the Adobe Suite price:");
//Prompt user for MacBook Pro cost
var macBook = prompt("Now, enter the cost of the MacBook Pro:");
//Calculate total cost
var totalCost = Number(adobeSuite) + Number(macBook);
//console.log out
console.log("The combined cost of the Adobe Suite and MacBook Pro is $"+totalCost+".");
//Alert the user the total cost
alert("The combined cost of the Adobe Suite and MacBook Pro is $"+totalCost+".");

//Calculate how much the Adobe Suite and MacBook Pro will cost + tax

//Prompt user to figure out cost with tax
var tax = prompt("Lets calculate how much tax you'll be charged:" +
    "\n Please enter your states tax %:");
//calculate tax
var taxAmnt = Number(tax) / Number(totalCost);
//Add tax to totalCost
var complete = Number(taxAmnt) + Number(totalCost);
//console.log out
console.log("You were originally charged $"+totalCost+", your final amount owed is $"+complete+".");
//alert user the final price
alert("You were originally charged $"+totalCost+", your final amount owed is $"+complete+".");
