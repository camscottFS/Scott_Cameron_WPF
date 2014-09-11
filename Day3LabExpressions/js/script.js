/*

 Cameron Scott
 WPF 0509
 Day 3 Lab Expressions

 */

// Slice of Pizza Part 1

var pizzaSlices = 12;
// Declare slices of pizza
var people = 8;
// Declare amount of people
var pizzaOrdered = 4;
// Declare the number of pizzas ordered
var result = (pizzaSlices * pizzaOrdered) / people;
// Declare result by multiplying pizzaSlices and pizzaOrdered and then decide by amount of people to get result
console.log("Each person ate "+result+" slices of pizza at the party.");
// console log result

// Slice of Pizza Part 2

var leftOvers = (pizzaSlices * pizzaOrdered) % people;
// Declare leftOvers by multiplying pizzaSlices and pizzaOrdered followed by the remainder
console.log("Sparky got "+leftOvers+" slices of pizza.");
// console log leftOvers

// Average shopping bill

var weeklyBill1 = 123.21;
// Declare first bill
var weeklyBill2 = 158.83;
// Declare second bill
var weeklyBill3 = 146.25;
// Declare first bill
var weeklyBill4 = 137.30;
// Declare first bill
var weeklyBill5 = 160.57;
// Declare first bill
var totalSpent = weeklyBill1 + weeklyBill2 + weeklyBill3 + weeklyBill4 + weeklyBill5;
// Add total spent
var totalAverage = (totalSpent)/5;
// Calculate average
console.log("You have spent a total of $"+totalSpent+" on groceries over 5 weeks. That is an average of $"+totalAverage+" per week.");
// console log out totalSpent and totalAverage


// Discounts

var originalPrice = 10;
// Declare original price
var discountPercent = .50;
// Declare the discount percentage
var itemDescription = "Candle Bundle";
// Declare the item: Candle Bundle
var salesTax = 0.065;
// Declare the sales tax: Florida

var noTax = originalPrice*discountPercent;
// Cost without tax

var tax = noTax*salesTax;
// Get the tax amount

var withTax = (originalPrice*discountPercent)+tax;
// Cost with tax

console.log("Your "+itemDescription+" was originally $"+originalPrice+" but after a "+discountPercent+"% discount, it is now $"+noTax+" without tax, and $"+withTax+" with tax.");
// console log itemDescription, originalPrice, discountPercent, noTax, and withTax