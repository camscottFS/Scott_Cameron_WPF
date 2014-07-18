/**
Cameron Scott
WPF Section 1
7-18-14
Day 6 Files
*/

//Basic Conditional

// Test if a is less than 5

var a = 8;

if(a<5){
    //If a IS less than 5, this code will run
    console.log("a is less than five");
}
else{
    //If a IS greater than 5, this code will run
    console.log("a is greater than five");
}

// Test if an animal is a dog

var animal = prompt("What type of animal do you have?");

if(animal === "dog"){
    console.log("Yes, this animal is a dog.");
}
else if(animal === "cat"){
    console.log("Your cat is named Whiskers");
} else if(animal === "monkey"){
    console.log("Your monkey is named Curious George");
} else{
    console.log("Good luck with your weird animal");
}

// && and

// Or ||

// Exclusive Or (XOR) ^

// Not !

// Ternary

var x = 6;

if(x>5){
    console.log("Your number is greater than five.");
}else{
    console.log("Your number is five or less.");
}


(x > 5) ? console.log("Your number is greater than five.") : console.log("Your number is five or less.");