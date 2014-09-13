/*
 Cameron Scott
 WPF Section 1
 09/12/14
 Conditions Worksheet
 */
var movieTime = prompt("What time is your movie starting?");
// Ask user what time their movie is starting
if(movieTime >= 3 <= 5){
// If the movie time is between 3pm and 5pm then run below code
    alert("The ticket price is $7.00");
    console.log("The ticket price is $7.00");
}else{
// If the movie time is not between 3pm and 5pm then run below code
    alert("The ticket price is $12.00");
    console.log("The ticket price is $12.00");
}

var age = prompt("How old are you?");
// Ask user for age
if(age >= 5 || age <= 10) {
// If user is older then 55 or younger then 10 then run below code
    alert("Discounted! The ticket price is $7.00");
    console.log("Discounted! The ticket price is $7.00");
}