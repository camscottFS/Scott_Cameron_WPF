/*
Cameron Scott
WPF Section 1
7-14-14
Expressions Personal
*/

//Personal
//Lets figure out how much a vehicle and motorcycle cost

//Initial user prompt (Enter vehicle worth)
var car = prompt("Lets calculate how much your car and motorcycle cost." +
    "\nPlease enter how much your vehicle is worth:");
//Enter motorcycle worth
var motorcycle = prompt("Now, enter how much your motorcycle is worth:");
//Add the users car and motorcycle worth together
var total = Number(car) + Number(motorcycle);
//Console log out
console.log("Your car and motorcycle are worth $"+total+" combined");
//Alert the user how much their vehicles cost
alert("Your car and motorcycle are worth $"+total+" combined");

//Lets calculate how much insurance is costing you (enter car insurance payment)
var carInsurance = prompt("Let's calculate how much your paying for insurance for both vehicles for 6 months." +
    "\nPlease enter your monthly car insurance payment:");
//Enter motorcycle insurance payment
var cycleInsurance = prompt("Now, enter your monthly motorcycle insurance payment:");
//Add the car and motorcycle insurance cost together, and then multiple by 6 for six months
var insuranceTotal = (Number(carInsurance) + Number(cycleInsurance)) * 6;
//Console log out
console.log("Your car and motorcycle insurance are costing you $"+insuranceTotal+" every 6 months.");
//Alert the user how much they are paying for insurance every 6 months
alert("Your car and motorcycle insurance are costing you $"+insuranceTotal+" every 6 months.");