/*
Cameron Scott
WPF Section 1
09/10/14
Expressions: Wacky
 */

// Let's do something wacky with some Justice League Members and The Avengers Members

alert("Let's do something wacky with the Justice League and The Avengers!");
// Alert the user that we're going to have some fun.
var leaguePrompt = prompt("Please enter your favorite Justice League member:");
// Prompt the user for a Justice League member
var avengerPrompt = prompt("Now, please enter your favorite Avenger:");
// Prompt the user for an Avenger member
var leagueMember = leaguePrompt;
// Set leagueMember to what the user entered
var avengerMember = avengerPrompt;
// Set avengerMember to what the user entered
var league = String(leagueMember);
// set league to a String of leagueMember
var avenger = String(avengerMember);
// set avenger to a String of avengerMember
console.log("Awesome! You chose "+league+" and "+avenger+"!");
// console.log what the user chose
console.log("Time for battle! "+league+" and "+avenger+" are battling to the death!");
// console.log that it's time to battle
leagueHP = 40;
// set leagueHP to 40
avengerHP = 50;
//ser avengerHP to 50
var battleResult = String(leagueHP)-String(avengerHP);
// Subtract the Strings of leagueHP and avengerHP
console.log("The battle has ended! "+league+" died with "+battleResult+" hitpoints, which means "+avenger+" wins!");
// console.log that the battle has ended and the Avenger has won, because Avengers always win.