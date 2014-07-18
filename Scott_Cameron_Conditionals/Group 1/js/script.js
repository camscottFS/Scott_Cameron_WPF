/*
Cameron Scott
WPF Section 1
7-18-14
Conditions Group 1
 */

//Prompt user to insert initial degrees

var initial = prompt("Please enter your initial degrees.");

//Prompt user to enter number
var choose = prompt("Converting to Celsius or Fahrenheit?\n" +
    " C = Celsius | F = Fahrenheit");

//if choose = C then continue
if(choose == "C"){
//Fahrenheit to Celsius calculation
var celFah = (Number(initial) - 32) * 5 / 9;
//alert the final result
        alert(+initial+ " degrees Fahrenheit is "+celFah+ " degrees Celsius.");
console.log(+initial+ " degrees Fahrenheit is "+celFah+ " degrees Celsius.");
    }else{
    }

//if choose = F then continue
if(choose == "F") {
//Celsius to Fahrenheit calculation
var fahCel = Number(initial) * 9 / 5 + 32;
//alert the final result
        alert(+initial+ " degrees Celsius is "+fahCel + " degrees Fahrenheit.");
console.log(+initial+ " degrees Celsius is "+fahCel + " degrees Fahrenheit.");
    }else{
    }