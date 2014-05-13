/*
Cameron Scott
WPF Section 1
Expressions Personal
*/

//Personal
//Lets figure out how much a vehicle and motorcycle cost

var car = prompt("Lets calculate how much your car and motorcycle cost." +
    "\nPlease enter how much your vehicle is worth:");
var motorcycle = prompt("Now, enter how much your motorcycle is worth:");
var total = Number(car) + Number(motorcycle);
console.log("Your car and motorcycle are worth $"+total+" combined");
alert("Your car and motorcycle are worth $"+total+" combined");

//Lets calculate how much insurance is costing you
var carInsurance = prompt("Let's calculate how much your paying for insurance for both vehicles for 6 months." +
    "\nPlease enter your monthly car insurance payment:");
var cycleInsurance = prompt("Now, enter your monthly motorcycle insurance payment:");
var insuranceTotal = (Number(carInsurance) + Number(cycleInsurance)) * 6;
console.log("Your car and motorcycle insurance are costing you $"+insuranceTotal+" every 6 months.");
alert("Your car and motorcycle insurance are costing you $"+insuranceTotal+" every 6 months.");