/*
 Cameron Scott
 WPF Section 1
 09/22/2014
 Functions: Industry
*/

// Figuring out the cost of hosting and setting up a website

var prompt = prompt("Do you want to setup a website?");
// prompt the user if they want to setup a website
if(prompt === "yes"){
    // if prompt === yes then run below code
    alert("Thanks for deciding to setup a website!\nFlorida Tax: 0.65\nInitial Setup: $100\nMonthly Cost: $9.99");
    // alert the user about the tax, initial setup cost, and monthly cost
    function webCost(a,b,c){
        // declare webCost as function
        var cost = c(a+b);
        // declare cost as a variable = c(a+b)
        return cost;
        // call the function
    }
    var total = webCost(100,9.99);
    // declare total as webCost function with 100 (initial setup) and 9.99 (monthly cost)
    alert("Your first month payment will be "+total+".");
    // alert the user about their first month payment
}
if(prompt === "no") {
    // if prompt === no then run below code
    alert("We're sorry you decided not to setup a website.");
    // alert the user that we're sorry they didn't decide to setup a website
}
else if(prompt != "yes" || "no"){
    // if the user didn't enter yes or no then run below code
    alert("You didn't enter yes or no!");
    // alert the user
}
else{
// Nothing to see here
}