/*
Cameron Scott
WPF Section 1
09/22/2014
Functions: Wacky
*/

var number = prompt("Enter a number between 1-10:");
// set number equal to a prompt to ask the user to enter a number between 1 and 10
if(number === "1"){
    // if user entered a text string of 1 then run below code
    alert("You entered "+number+" and triggered this secret function");
    // alert the user that they triggered the secret function
    function add(a,b,c){
    // declare the function add

        var total = a+b+c;
        return total;
        // return the function
    }

    var math = add(1,2,3);
    // call the function
    alert("Add "+number+" + 2 + 3 = "+math+"");
    // alert the user of the math involved in the secret function
}
if(number === "2"){
    // if user entered a text string of 1 then run below code
    alert("You entered "+number+", there's no secret function here.");
    // alert the user
}
if(number === "3"){
    // if user entered a text string of 1 then run below code
    alert("You entered "+number+", there's no secret function here.");
    // alert the user
}
if(number === "4"){
    // if user entered a text string of 1 then run below code
    alert("You entered "+number+", there's no secret function here.");
    // alert the user
}
if(number === "5"){
    // if user entered a text string of 1 then run below code
    alert("You entered "+number+", there's no secret function here.");
    // alert the user
}
if(number === "6"){
    // if user entered a text string of 1 then run below code
    alert("You entered "+number+", there's no secret function here.");
    // alert the user
}
if(number === "7"){
    // if user entered a text string of 1 then run below code
    alert("You entered "+number+", there's no secret function here.");
    // alert the user
}
if(number === "8"){
    // if user entered a text string of 1 then run below code
    alert("You entered "+number+", there's no secret function here.");
    // alert the user
}
if(number === "9"){
    // if user entered a text string of 1 then run below code
    alert("You entered "+number+", there's no secret function here.");
    // alert the user
}
if(number === "10"){
    // if user entered a text string of 1 then run below code
    alert("You entered "+number+", there's no secret function here.");
    // alert the user
}
else if(number < 0 || number > 10) {
    // if the text string entered is less than 0 or greater than 10 then run below code
alert("You entered "+number+", but it's either less than 0 or greater than 10.");
    // alert the user
}
else{
// nothing to see here
}