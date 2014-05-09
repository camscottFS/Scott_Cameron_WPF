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

//Boolean
// true or false
// NOT the text value for it!
//MUST BE lowercase!

var yes = true;
var nope = false;

//Not Boolean just text
var maybe = "true";

// order of operations
//PEMDAS
//please excuse my dear aunt sally
//Parthenthesis, exponents, multiplications, division, addition, subtraction

// Find the average of 4 quiz grades

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;
var quiz4 = 80;

// Add all four variables together and divide by total number of quizzes

var average = (quiz1 + quiz2 + quiz3 + quiz4) /4;
console.log(average);

//DO NOT over use parenthesis

//Find the perimeter of a rectangle
// length * 2 + width * 2

var length = 7;
var width = 6;
var perimeter = (length*2)+(width*2);
console.log(perimeter);
console.log("The perimeter of a rectangle with a length of "+length+" and a width of "+width+ " is " +perimeter+".");

//Concatenating - combining strings of text together

var firstName = "Kermit";
var lastName = "The Frog";

//Combine first and last name

var fullName = firstName +" " + lastName;
console.log(fullName);

var d = "6";
var e = "7";
var combine = d+e;
console.log(combine);