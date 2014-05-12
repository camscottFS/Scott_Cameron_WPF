/*
Cameron Scott
WPF Section 1
Day 4 Casting Variables
 */

//var stringVar = "6";
var stringVar = Number("6");
var result = 7+ Number(stringVar);
console.log(result);

// Number()

//Casting numbers as String Variables
var areaCode = 407;
var firstPart = 203;
var secondPart  = 4529;

//Combine these into a phone number
var phoneNumber = String(areaCode)+String(firstPart)+String(secondPart);
console.log(phoneNumber);

//Prompting, prompts return string values

var cupsHad = prompt("How many cups do you have?");
var cupsBought = prompt("How many cups are you going to buy?");

//Total number of cups this person will have
var totalCups = Number(cupsHad) + Number(cupsBought);
console.log(totalCups);

//Parsing Integer
//parseInt()

var a = parseInt("40 years old");
console.log(a);

var b = parseInt("He was 40 years old");
console.log(b);