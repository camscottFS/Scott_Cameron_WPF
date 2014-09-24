
 /*
Nick Boruch
WPF 1407
7/25/14
Anonymous Function
 */

//alert("Testing 1,2,3");

 //Function call to the normal function
 var areaResults2= triangleArea(4,5);
 console.log (areaResults2);

 /*

 THIS WILL NOT WORK!! BECAUSE THE BROWSER CANNOT see the function until after initialized


//Function call to the anon function
var anonReults2 = triAreaAnon(2,9);
console.log anonReults2
*/

//Anonymous Functions
//Extremely popular in jQuery and js
//Important in Object Oriented Programming
//Both styles of functions work
//Coding style
//Very quick and easy!


//Create a function for area of a triangle

//Normal Function
 function triangleArea (b,h) {

     //Calc the area
     var area = .5 * b*h;

     //Return the area
     return area;

 }


 //Create an anonoymous function

 var triAreaAnon= function (b,h){
     //Calc the area
     var area = .5 * b*h;

     //Return the area
     return area;


 }

 //Function call
 var areaResults = triangleArea(6,7);
console.log (areaResults);


var anonResults = triAreaAnon(3,8);
 console.log(anonResults);