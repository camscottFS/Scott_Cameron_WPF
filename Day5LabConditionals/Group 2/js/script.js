/*
Cameron Scott
WPF Section 1
09/12/14
Conditions Worksheet
 */

// Check the Login

var username = prompt("Please enter your username:");
// Prompt user for username
if(username === "camsco") {
// If username is correct, run below code
    var password = prompt("Please enter your password:");
// Prompt user for password
if(password === "password"){
// If password is correct, run below code
    alert("Welcome, "+username+"!");
    console.log("Welcome, "+username+"!");
}else{
// This code runs if password is not correct
    alert("Password does not match our records.");
    console.log("Password does not match our records");
}
}else{
// This code runs if username is not correct
    alert("Username not found. Try again.");
    console.log("username not found. Try again.");
}