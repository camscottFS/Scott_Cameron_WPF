/*
Cameron Scott
WPF Section 1
Expressions Personal
*/

/*
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