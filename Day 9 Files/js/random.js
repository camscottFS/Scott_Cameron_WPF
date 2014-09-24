
 /*
Nick Boruch
WPF 1407
7/25/14
Random Numbers
 */

//alert("Testing 1,2,3");


//Create a function that accepts a min and max number and returns a random number
// between them

// Math.round( Math.random ()*(max-min)+min)

//Givens


 //console.log("Your random number between ___and ___is____");

function minMax (min,max){
     var random = Math.round(Math.random()*(max-min)+Number (min));
         return random;

}
var minNum=prompt("Please enter a min number!");



var maxNum=prompt("Please enter a max Number!");

 var results= minMax(minNum,maxNum);

 console.log("Your random number is between "+minNum+" and "+ maxNum+" and is "+results);




