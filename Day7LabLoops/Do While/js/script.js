/*
Cameron Scott
WPF Section 1
09/17/14
Activity: Loops
*/

// Do While Loop

var number = prompt("Enter a number:");
// Prompt user to enter a number
if(number != Number(number)){
    alert("You did not enter a number!");
}
else{
    alert("Something broke.");
}
do{
// Do loop
    alert("Your number "+number+ " will keep increasing by 1 until it reaches 400.");
// Alerts the user as it increase by 1
    number++;
// Increase variable 'number' by 1 each time

}while (number < 400);
// Loop will end when 'number' reaches 400