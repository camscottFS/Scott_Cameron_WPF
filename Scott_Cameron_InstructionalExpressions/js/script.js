/*

Cameron Scott
WPF 1407
7-11-2014
Instructional Expressions

 */

// Slice of Pizza Part 1

var pizzaSlices = 10;
var people = 6;
var pizzaOrdered = 2;
var result = (pizzaSlices * pizzaOrdered) / people;
console.log("Each person ate "+result+" slices of pizza at the party.");

// Slice of Pizza Part 2

var leftOvers = (pizzaSlices * pizzaOrdered) % people;
console.log("Sparky got "+leftOvers+" slices of pizza.");

// Average shopping bill

var weeklyBill1 = 81.21;
var weeklyBill2 = 74.83;
var weeklyBill3 = 86.25;
var weeklyBill4 = 97.30;
var weeklyBill5 = 83.57;
var totalSpent = weeklyBill1 + weeklyBill2 + weeklyBill3 + weeklyBill4 + weeklyBill5;
var totalAverage = (weeklyBill1 + weeklyBill2 + weeklyBill3 + weeklyBill4 + weeklyBill5)/5;
console.log("You have spent a total of $"+totalSpent+" on groceries over 5 weeks. That is an average of $"+totalAverage+" per week.");

// Discounts

var originalPrice = 10;
var discountPercent = 50;
var itemDescription = "Axe Bodyspray";
var salesTax = 6.5;

// Cost without tax
var noTax = discountPercent/originalPrice;

// Get the tax amount
var tax = (salesTax/originalPrice);

// Cost with tax
var withTax = (discountPercent/originalPrice)+tax;

// End result
console.log("Your "+itemDescription+" was originally $"+originalPrice+" but after a "+discountPercent+"% discount, it is now $"+noTax+" without tax, and $"+withTax+" with tax.");
