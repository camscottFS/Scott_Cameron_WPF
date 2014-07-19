/**
Cameron Scott
WPF Section 1
7-18-14
Conditionals: Industry
*/

//Enter username
var username = prompt("Please enter your username:");
//If username equals "camsco", then run code
if(username === "camsco")
{
    //Prompt user for password
	var password = prompt("Please enter your password:");
    //If password = "password" then run below code
	if(password === "password"){
        //If password works, then Welcome!
		console.log("Welcome "+username+"!");
		}
		if(password != "password"){
        //console.log result
			console.log("Password does not match our records.");
		}
}
//If username does not equal "camsco" than then code
else
{
    //console.log result
	console.log("User not found. Try again.");
}