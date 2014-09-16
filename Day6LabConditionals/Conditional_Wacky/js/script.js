/*
 Cameron Scott
 WPF Section 1
 09/15/14
 Conditionals: Wacky
 */

//Let's figure out if a number is greater then 5

alert("Let's figure out if the number you enter is greater then five!");
// alert the user
var number = prompt("Please enter a number:");
// prompt user for number
if(number > 5){
// if the number is greater then 5 then run below code
    alert("You entered "+Number(number)+" and it's greater then 5!");
}
if(number < 5){
// if the number is less then 5 then run below code
    alert("You entered "+Number(number)+" and it's not greater then 5!");
}
else{
// console.log the number
    console.log(number);
}