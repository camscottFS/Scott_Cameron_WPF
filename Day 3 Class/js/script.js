/**
 Cameron Scott
 WPF Section 1
 7-14-14
 */

var stringVar = "6";
var result = 7+Number(stringVar);
console.log(result);

//

var userInput = prompt("How old are you?");
var futureAge = Number(userInput) + 10;
console.log(futureAge);

//

var yearBorn = prompt("Type in the year you were born:");

var age = 2014 - Number(yearBorn);
console.log(age);

//

var areaCode = 407;
var firstPart = 111;
var secondPart = 2222;

var phoneNumber = "("+String(areaCode)+")"+" "+String(firstPart)+"-"+String(secondPart);
console.log(phoneNumber);

//

var a = parseInt("40 years old");
console.log(a);

var b = parseInt("I am 40 years old.");
console.log(b);