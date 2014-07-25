/**
Cameron Scott
WPF Section 1
7-18-14
Conditionals: Industry
*/

var go = prompt("Do you want to go to class?");

if(go == "yes"){
    console.log("Good choice!");
    alert("Good choice!");
}else if(go == "no"){
    alert("Are you sure!?");
    console.log("Bad choice.");
}else{
    console.log("You didn't enter a YES or a NO.");
    alert("You didn't enter a YES or a NO.")
}