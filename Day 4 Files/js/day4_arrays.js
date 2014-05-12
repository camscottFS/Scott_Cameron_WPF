/*
 Cameron Scott
 WPF Section 1
 Arrays
 */

//Create a basic array
var avengersNames = ["Hulk", "Iron Man", "Captain America"];

//Print out the whole array
console.log(avengersNames);

//Access a specific item in the array
console.log(avengersNames[2]);

//Set the value of a specific item
avengersNames[0] = "Black Widow";
console.log(avengersNames);

//Add a new variable to the array
avengersNames[3] = "Hawkeye";
avengersNames[4] = "Scarlet Witch";
avengersNames[5] = "Quicksilver";
avengersNames[6] = "Green She-Hulk";
console.log(avengersNames);

//Figure out how long the array is
// length property of arrays
// to access a property or attribute of a variable
// use DOT SYNTAX

console.log(avengersNames.length);

//The index number of the LAST item in an array
// is one less than the length of the array

//Create a variable to find the last item

var newestRecruit = [avengersNames.length - 1];
//Gives us the index # of the last item in array

//Print out the newest avenger
console.log("Welcome "+avengersNames[newestRecruit]+" you are our newest Avenger!");

//Create an array to hold the # of oranges we pick each day
var orangesPicked = [9000, 30, 35000];

//Average amount of oranges picked in a day

//Add all 3 days then divide by # of days

//Create variable to hold the total number of oranges

var total = orangesPicked[0]+ orangesPicked[1] + orangesPicked[2];
console.log(total);
//Create a variable for total # of days

var totalDays = orangesPicked.length;
console.log(totalDays);

//Create a variable to hold the average per day
var average = total/totalDays;
console.log(average);
console.log("An "+average+" amount of oranges were picked on average for the past "+total+" days.")