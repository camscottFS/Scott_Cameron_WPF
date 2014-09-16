/*
 Cameron Scott
 WPF Section 1
 09/15/14
 Conditionals: Industry
 */

// Ask the user if they want to buy an iPad or MacBook
// Find out if the person is paying cash or debit
// If the person is paying with cash, and chose the iPad, they'll get a 5% discount

alert("Let's purchase an iPad or MacBook");
// Alert the user what we're going to do
var item = prompt("Do you want to purchase the iPad or MacBook?");
// prompt purchase iPad or MacBook?
if(item === "iPad"){
// If iPad, run below code
    var chooseIPad = prompt("You chose the iPad, are you sure? You'll receive a 5% discount by paying with cash");
}
if(chooseIPad === "yes"){
// if yes run below code
    var payment1 = prompt("Would you like to pay with cash or debit?");
}
if(chooseIPad === "no"){
// if no run below code
    alert("Were sorry you didn't decide to go with our product.")
}
if(payment1 === "cash" && chooseIPad === "yes"){
// if cash run below code
    alert("Awesome, since you're paying with cash you'll receive our 5% discount!");
}
if(payment1 === "debit" && chooseIPad === "yes"){
// if debit run below code
    alert("Thanks for your purchase, you've paid with a debit card.");
}
if(item === "MacBook"){
// if macbook run below code
    var chooseMac = prompt("You chose the MacBook, are you sure?");
}
if(chooseMac === "yes"){
// if yes run below code
    var payment2 = prompt("Would you like to pay with cash or debit?");
}
if(chooseMac === "no"){
// if no run below code
    alert("Were sorry you didn't decide to go with our product.")
}
if(payment2 === "cash" && chooseMac === "yes"){
// if cash run below code
    alert("Thanks for your purchase, you've paid with cash");
}
if(payment2 === "debit" && chooseMac === "yes"){
// if debit run below code
    alert("Thanks for your purchase, you've paid with a debit card");
}
else if(payment1 === String(payment1)){
// if all else fails
    alert("You didn't enter cash or debit.");
}
else if(payment2 === String(payment2)){
// if all else fails
    alert("You didn't enter cash or debit.");
}
else if(item === String(item)){
// if user didn't chose iPad or MacBook
    alert("You didn't chose the iPad or MacBook!");
}
else{
// if all else fails
    alert("Something broke :(");
}