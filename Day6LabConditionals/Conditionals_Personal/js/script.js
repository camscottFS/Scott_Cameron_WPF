/*
Cameron Scott
WPF Section 1
09/15/14
Conditionals: Personal
*/

// Figure out if you can play Heroes & Generals

alert("Let's figure out if you can play Heroes & Generals");
// Alert the user if they can play H&G
var heroes = prompt("Did you complete your class assignments?");
// Prompt if user they completed assignments
if(heroes === "yes"){
// If user entered yes then run below code
    var test = prompt("Did you study for the upcoming test?");
}
if(test === "yes"){
// If user entered yes then run below code
    var grade = prompt("Whats your average in your current class?");
}
if(grade >= 80){
// if grade is greater then 80 then run below code
    alert("You can play Heroes & Generals!");
}
else if(grade <= 80){
// if grade is less then 80 then run below code
    alert("Your grade is too low! Start studying before you play!");
}
else{
// If all else fails
    alert("You can't play Heroes & Generals");
}