/*
Cameron Scott
WPF Section 1
09/17/14
Activity: Loops
*/

// While Loop

var car = prompt("Enter 'Audi' or else!");
if(car === "Audi"){
    while(car === "Audi"){
        alert("You have an "+car+" and your stuck in a while Loop.");
    }
}
if(car != "Audi"){
    alert("You didn't enter 'Audi'");
}
else{
    alert("Something broke.");
}