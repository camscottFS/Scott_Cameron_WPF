/**
Cameron Scott
WPF Section 1
May 14 2014
Conditions Worksheet
*/

//Enter username
var username = prompt("Please enter your username:");
//If username equals "camsco", then run code
if(username === "camsco")
{
	var password = prompt("Please enter your password:");
	if(password === "password"){
		console.log("Welcome "+username+"!");
		}
		else{
			console.log("Password does not match our records.");
		}
}
//If username does not equal "camsco" than then code
else
{
	console.log("User not found. Try again.");
}