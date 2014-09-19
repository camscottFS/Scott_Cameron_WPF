/*
Cameron Scott
09/19/14
Activity: Functions
*/

// Figure out how many bee stings it will take to kill your dog

function weight(w){
     var stings =  8.666666667.toFixed(1) *w;
     return stings;
 }
 var dog = prompt("How many lbs is your dog?\n( Enter a number )");
// declare dog as a prompt to ask how many lbs the dog is
 var sStings = weight(dog);
    alert("It will take "+sStings.toFixed(0)+ " bee stings to kill your dog.");
// Alert the user
if(dog != Number(dog)){
// if dog doesn't equal a number then run below code
    alert("You did not enter a number!")
}

// Calculate the circumference of a circle

 function circleCircumference(d){
// declare circleCircumference as a function
         var circumference = Math.PI*d;
     // set circumference to Math.Pi*d equation
     return circumference;
     // return the variable circumference
 }
var circle = prompt("Please type in a diameter: \n( Enter a number )");
// declare circle as a prompt to ask the user to enter a diameter
if(circle != Number(circle)){
// if circle doesn't equal a number then run below code
    alert("You did not enter a number!")
}

var diameter =circleCircumference(circle);
    alert("The diameter is "+circle+" and the circumference is " +diameter.toFixed(2));
// Alert the user