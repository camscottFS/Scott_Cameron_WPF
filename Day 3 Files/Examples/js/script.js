/*
Cameron Scott
WPF 1405
Day 3 Class Examples
 */

//alert("Your page is linked correctly.");

//Find out how old we are
//Create a variable for birth year
var birthYear = 1994;

//Create a variable to hold the age
var age = 2014 - birthYear;
console.log(age);

//Math
// + - / *

//Find the area of a triangle
// base * height * 1/2
var base = 4;
var height = 5;

var areaTriangle = base*height*.5;
console.log(areaTriangle);

//Module - %
//Gives the reaminer

var remainder = 32%10;
console.log(remainder);

//Find out if things are even or odd
var evenOrOdd = 67%2;
console.log(evenOrOdd);

//Assignment Operators
/*

= Assignment
++ Adds 1 to the variable
-- Subtract 1 from the variable
+= Addition Assignment
-= Subtraction Assignment
/= Division Assignment
*= Multiplication Assignment

 */
var a = 1;
a++; // a = a+1
a--; // a = a -1
a+=4; // a = a+4
a-=3; // a = a-3
a/=2; // a = a/2
a*=6; // a = a*6
console.log(a);

//Strings
// " or ' used to find the beginning and end of string
// Needed to distinguish between variable names and normal text

var kermit = "light green";
var frogName = "kermit";

//Double or single quotes?
//Can use either BUT MUST match!

var courseName = 'Web Programming Fundamentals';
var  phrase = 'I don\'t know\n New line starts here';
console.log(phrase);

//Escaping character " \ " <-- backslash

// \n <-- New line character